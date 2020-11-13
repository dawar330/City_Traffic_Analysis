/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import {Layout} from "../_metronic/layout";
import BasePage from "./BasePage";
import AuthPage  from "../app/pages/auth/AuthPage";
import { connect } from "react-redux";
import firebase from "../config/fbConfig";

export function Routes(props) {



    const {isAuthorized} = useSelector(
        ({firebase}) => ({
            isAuthorized: !firebase.auth.isEmpty ,
        }),
        shallowEqual
    );
    console.log(isAuthorized);
    return (
        <Switch>
            {!isAuthorized ? (
                /*Render auth page when user at `/auth` and not authorized.*/
                   
                    <AuthPage />
                
            ) : (
                /*Otherwise redirect to root page (`/`)*/
                <Redirect from="/auth" to="/"/>
            )}

            
          


            {!isAuthorized ? (
                /*Redirect to `/auth` when user is not authorized*/
                <Redirect to="/auth/login"/>
            ) : (
                <Layout>
                    <BasePage/>
                </Layout>
            )}
        </Switch>
    );
}

  