/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React, { useState } from "react";
import { Redirect, Switch } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import VardenBasePage from "./VardenBasePage";
import AuthPage from "../app/pages/auth/AuthPage";
import { Layout } from "../_metronic/layout";
import BasePage from "./BasePage";

import firebase, { auth, db } from "../config/fbConfig";

export function Routes() {
  const { isAuthorized } = useSelector(
    ({ firebase }) => ({
      isAuthorized: !firebase.auth.isEmpty,
    }),
    shallowEqual
  );
  const [isAdmin, setisAdmin] = useState();
  const [User, setUser] = useState([]);
  const [UserNotification, setUserNotification] = useState([]);
  React.useEffect(() => {
    if (isAuthorized) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          user.getIdTokenResult().then((idTokenResult) => {
            user.admin = idTokenResult.claims.admin;
          });
        }
      });
      firebase
        .auth()
        .currentUser.getIdTokenResult()
        .then((idTokenResult) => {
          // Confirm the user is an Admin.
          if (!!idTokenResult.claims.admin) {
            // Show admin UI.
            setisAdmin(idTokenResult.claims.admin);
            console.log(idTokenResult.claims.admin);
          } else {
            // Show regular user UI.
            setisAdmin(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
      var currentUser = firebase.auth().currentUser;

      db.collection("Users")
        .doc(currentUser.uid)
        .get()
        .then(function(doc) {
          if (doc.exists) {
            setUser({ ...doc.data(), ID: doc.id });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });

      db.collection("Notification")
        .orderBy("createdAt", "desc")

        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({ ...doc.data(), ID: doc.id });
          });
          setUserNotification(items);
        });
    }
  }, [isAuthorized]);

  return (
    <Switch>
      {!isAuthorized ? (
        /*Render auth page when user at `/auth` and not authorized.*/

        <AuthPage />
      ) : (
        /*Otherwise redirect to root page (`/`)*/
        <Redirect from="/auth" to="/" />
      )}

      {!isAuthorized && (
        /*Redirect to `/auth` when user is not authorized*/
        <Redirect to="/auth/login" />
      )}

      {isAdmin ? (
        /*Render auth page when user at `/auth` and not authorized.*/

        <Layout
          isAdmin={isAdmin}
          User={User}
          UserNotification={UserNotification}
        >
          <BasePage User={User} />
        </Layout>
      ) : (
        <Layout
          User={User}
          isAdmin={isAdmin}
          UserNotification={UserNotification}
        >
          <VardenBasePage User={User} UserNotification={UserNotification} />
        </Layout>
      )}
    </Switch>
  );
}
