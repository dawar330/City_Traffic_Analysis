import React, { useState, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";

import UserProfilepage from "./pages/UserProfile/UserProfilePage";
import { EmergencyPage } from "./pages/EmergencyPage";

function VardenBasePage(props) {
  const { User } = props;
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/user-profile" />
        }
        <Route
          path="/user-profile"
          component={() => <UserProfilepage User={User} />}
        />
        <ContentRoute path="/EmergencyNumbers" component={EmergencyPage} />

        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}

export default VardenBasePage;
