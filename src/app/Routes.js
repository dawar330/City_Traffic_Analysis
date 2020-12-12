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
import { db } from "../config/fbConfig";
import firebase from "../config/fbConfig";
export function Routes() {
  const { isAuthorized } = useSelector(
    ({ firebase }) => ({
      isAuthorized: !firebase.auth.isEmpty,
    }),
    shallowEqual
  );

  const [User, setUser] = useState([]);
  const [UserNotification, setUserNotification] = useState([]);
  React.useEffect(() => {
    if (isAuthorized) {
      var id = firebase.auth().currentUser;
      console.log(id.uid);
      db.collection("Users")
        .doc(id.uid)
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
        .limit(10)
        .get()
        .then(function(querySnapshot) {
          const Notification = [];
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            Notification.push({ ...doc.data(), ID: doc.id });
          });
          setUserNotification(Notification);
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
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

      {User.isadmin ? (
        /*Render auth page when user at `/auth` and not authorized.*/

        <Layout User={User} UserNotification={UserNotification}>
          <BasePage User={User} />
        </Layout>
      ) : (
        <Layout User={User} UserNotification={UserNotification}>
          <VardenBasePage User={User} />
        </Layout>
      )}
    </Switch>
  );
}
