/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import {VardenLayout} from "../_metronic/layout/components/VardenLayout";
import VardenBasePage from "./VardenBasePage";
import AuthPage  from "../app/pages/auth/AuthPage";


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
                <VardenLayout>
                    <VardenBasePage/>
                </VardenLayout>
            )}
        </Switch>
    );
}

  