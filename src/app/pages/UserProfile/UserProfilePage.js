import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSubheader } from "../../../_metronic/layout";
import AccountInformation from "./AccountInformation";
import { ProfileOverview } from "./ProfileOverview";
import ChangePassword from "./ChangePassword";
import PersonaInformation from "./PersonaInformation";
import EmailSettings from "./EmailSettings";
import  ProfileCard  from "./components/ProfileCard";
import { shallowEqual, useSelector } from "react-redux";
import { db } from "../../../config/fbConfig";

export default function UserProfilePage(props) {
  const suhbeader = useSubheader();
  suhbeader.setTitle("User profile");
 const {User} = props
  return (
    <div className="d-flex flex-row">
      <ProfileCard User={User}></ProfileCard>
      <div className="flex-row-fluid ml-lg-8">
        <Switch>
          <Redirect
            from="/user-profile"
            exact={true}
            to="/user-profile/profile-overview"
          />
          <Route
            path="/user-profile/profile-overview"
            component={() => <ProfileOverview User={User} />}
          />
          <Route
            path="/user-profile/account-information"
            component={() => <AccountInformation User={User} />}
          />
          <Route
            path="/user-profile/change-password"
            component={() => <ChangePassword User={User} />}
          />
          <Route
            path="/user-profile/email-settings"
            component={() => <EmailSettings User={User} />}
          />
          <Route
            path="/user-profile/personal-information"
            component={() => <PersonaInformation User={User} />}
          />
        </Switch>
      </div>
    </div>
  );
}
