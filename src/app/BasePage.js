import React, {Suspense} from "react";
import {Redirect, Switch} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_metronic/layout";
import {DashboardPage} from "./pages/DashboardPage";
import {SugestionsPage} from "./pages/SugestionsPage";
import {ReportingPage} from "./pages/ReportingPage";
import ProfilePage from "./pages/ProfilePage";
import WardenResponsibilitiesPage from "./pages/WardenResponsibilitiesPage";

export default function BasePage() {

    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/dashboard"/>
                }
                <ContentRoute path="/Dashboard" component={DashboardPage}/>
                <ContentRoute path="/Suggestions" component={SugestionsPage}/>
                <ContentRoute path="/Reporting" component={ReportingPage}/>
                <ContentRoute path="/WardenProfiles" component={ProfilePage}/>
                <ContentRoute path="/WardenResponsibility" component={WardenResponsibilitiesPage}/>
                <Redirect to="error/error-v1"/>
 
            </Switch>
        </Suspense>
    );
}
