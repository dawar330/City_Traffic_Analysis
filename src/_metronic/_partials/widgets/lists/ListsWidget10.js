/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

export function ListsWidget10(props) {
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
  const { UserNotification } = props;
  const { User } = props;
  const Notifications = [];
  {
    UserNotification &&
      UserNotification.forEach((Notification) => {
        if (Notification.to == User.ID) {
          Notifications.push(Notification);
        }
      });
  }
  return (
    <>
      <div className={`card card-custom card-stretch gutter-b`}>
        {/* Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Notifications
          </h3>
        </div>

        {/* Body */}
        <div className="card-body pt-0">
          {Notifications &&
            Notifications.map((Notification) => {
              return (
                <div key={Notification.ID} className="mb-6">
                  <div className="d-flex align-items-center flex-grow-1">
                    <label className="checkbox checkbox-lg checkbox-lg checkbox-single flex-shrink-0 mr-4">
                      <input type="checkbox" value={Notification.ID} />
                      <span></span>
                    </label>

                    <div className="d-flex flex-wrap align-items-center justify-content-between w-100">
                      <div className="d-flex flex-column align-items-cente py-2 w-75">
                        <a
                          href="#"
                          className="text-dark-75 font-weight-bold text-hover-primary font-size-lg mb-1"
                        >
                          {Notification.Message}
                        </a>

                        <span className="text-muted font-weight-bold">
                          {timeSince(Notification.createdAt)} ago.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

          {/* end: Item */}
        </div>
      </div>
    </>
  );
}
