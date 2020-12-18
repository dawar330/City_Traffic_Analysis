import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { connect, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../_helpers";
import {
  getUserNotification,
  signOut,
} from "../../../../../redux/actions/authActions";
import Adminexpantionpanel from "../../../../../app/Components/ExpantionPanel/Adminexpantionpanel";
import DeleteAdminexpantionpanel from "../../../../../app/Components/ExpantionPanel/DeleteAdminExpantionPanel";
import AddAdminexpantionpanel from "../../../../../app/Components/ExpantionPanel/AddAdminExpantionPanel";
import { auth } from "../../../../../config/fbConfig";
import { getFirebase } from "react-redux-firebase";

function QuickUser(props) {
  const { isAdmin } = props;
  const { User } = props;
  const { UserNotification } = props;

  const history = useHistory();
  const Notifications = [];
  const MyNotifications = [];
  {
    UserNotification &&
      UserNotification.forEach((Notification) => {
        if (Notification.to == "Admin") {
          Notifications.push(Notification);
        } else if (Notification.to == User.ID) {
          MyNotifications.push(Notification);
        }
      });
  }
  const firebase = getFirebase();

  function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  const logoutClick = () => {
    const toggle = document.getElementById("kt_quick_user_toggle");
    if (toggle) {
      toggle.click();

      props.signOut();
    }
    history.push("/logout");
  };

  return (
    <div
      id="kt_quick_user"
      className="offcanvas offcanvas-right offcanvas p-10"
    >
      <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
        <h3 className="font-weight-bold m-0">
          {User.FirstName} {User.LastName}
        </h3>
        <a
          className="btn btn-xs btn-icon btn-light btn-hover-primary cursor-pointer"
          id="kt_quick_user_close"
        >
          <i className="ki ki-close icon-xs text-muted" />
        </a>
      </div>

      <div className="offcanvas-content pr-5 mr-n5">
        <div className="d-flex align-items-center mt-5">
          <div className="symbol symbol-100 mr-5">
            <img className="symbol-label" src={User.pic} />
            <i className="symbol-badge bg-success" />
          </div>
          <div className="d-flex flex-column">
            <a
              href="#"
              className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary"
            ></a>
            <div className="text-muted mt-1">{User.Designation}</div>
            <div className="navi mt-2">
              <a className="navi-item cursor-pointer">
                <span className="navi-link p-0 pb-2">
                  <span className="navi-icon mr-1">
                    <span className="svg-icon-lg svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          "/media/svg/icons/Communication/Mail-notification.svg"
                        )}
                      ></SVG>
                    </span>
                  </span>
                  <span className="navi-text text-muted text-hover-primary">
                    {User.Email}
                  </span>
                </span>
              </a>
            </div>
            {/* <Link to="/logout" className="btn btn-light-primary btn-bold">
                Sign Out
              </Link> */}

            <button
              className="btn btn-light-primary btn-bold"
              onClick={logoutClick}
            >
              Sign out
            </button>
          </div>
        </div>

        <div className="separator separator-dashed mt-8 mb-5" />

        <div className="navi navi-spacer-x-0 p-0">
          {isAdmin && <Adminexpantionpanel User={User} />}
          {isAdmin && <AddAdminexpantionpanel User={User} />}
          {isAdmin && <DeleteAdminexpantionpanel User={User} />}
        </div>

        <div className="separator separator-dashed my-7"></div>

        <div>
          <h5 className="mb-5">Recent Notifications</h5>

          {isAdmin &&
            Notifications &&
            Notifications.map((Notification) => {
              return (
                <div
                  key={Notification.ID}
                  className={`d-flex align-items-center bg-light-${Notification.type} rounded p-5 gutter-b`}
                >
                  <span className="svg-icon svg-icon-warning mr-5">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}
                      className="svg-icon svg-icon-lg"
                    ></SVG>
                  </span>

                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">
                      {Notification.Message}
                    </a>
                    <span className="text-muted font-size-sm">
                      {timeSince(Notification.createdAt)} ago.
                    </span>
                  </div>
                </div>
              );
            })}
          {!User.isadmin &&
            MyNotifications &&
            MyNotifications.map((Notification) => {
              return (
                <div
                  key={Notification.ID}
                  className={`d-flex align-items-center bg-light-${Notification.type} rounded p-5 gutter-b`}
                >
                  <span className="svg-icon svg-icon-warning mr-5">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}
                      className="svg-icon svg-icon-lg"
                    ></SVG>
                  </span>

                  <div className="d-flex flex-column flex-grow-1 mr-2">
                    <a className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1">
                      {Notification.Message}
                    </a>
                    <span className="text-muted font-size-sm">
                      {timeSince(Notification.createdAt)} ago.
                    </span>
                  </div>
                </div>
              );
            })}

          {/* <div className="d-flex align-items-center bg-light-success rounded p-5 gutter-b">
            <span className="svg-icon svg-icon-success mr-5">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                className="svg-icon svg-icon-lg"
              ></SVG>
            </span>
            <div className="d-flex flex-column flex-grow-1 mr-2">
              <a
                href="#"
                className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                Would be to people
              </a>
              <span className="text-muted font-size-sm">Due in 2 Days</span>
            </div>

            <span className="font-weight-bolder text-success py-1 font-size-lg">
              +50%
            </span>
          </div>

          <div className="d-flex align-items-center bg-light-danger rounded p-5 gutter-b">
            <span className="svg-icon svg-icon-danger mr-5">
              <SVG
                src={toAbsoluteUrl(
                  "/media/svg/icons/Communication/Group-chat.svg"
                )}
                className="svg-icon svg-icon-lg"
              ></SVG>
            </span>
            <div className="d-flex flex-column flex-grow-1 mr-2">
              <a
                href="#"
                className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                Purpose would be to persuade
              </a>
              <span className="text-muted font-size-sm">Due in 2 Days</span>
            </div>

            <span className="font-weight-bolder text-danger py-1 font-size-lg">
              -27%
            </span>
          </div>

          <div className="d-flex align-items-center bg-light-info rounded p-5">
            <span className="svg-icon svg-icon-info mr-5">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Attachment2.svg")}
                className="svg-icon svg-icon-lg"
              ></SVG>
            </span>

            <div className="d-flex flex-column flex-grow-1 mr-2">
              <a
                href="#"
                className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
              >
                The best product
              </a>
              <span className="text-muted font-size-sm">Due in 2 Days</span>
            </div>

            <span className="font-weight-bolder text-info py-1 font-size-lg">
              +8%
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    },
  };
};
export default connect(null, mapDispatchToProps)(QuickUser);
