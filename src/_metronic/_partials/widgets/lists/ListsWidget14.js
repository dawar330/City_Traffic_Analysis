/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";

export function ListsWidget14(props) {
  const { className } = props;
  const { Duties } = props;
  return (
    <>
      {/* begin::List Widget 14 */}
      <div className={`card card-custom ${className}`}>
        {/* begin::Header */}
        <div className="card-header border-0">
          <h3 className="card-title font-weight-bolder text-dark">
            Assigned Areas
          </h3>
        </div>
        {/* end::Header */}
        {Duties &&
          Duties.map((Duty) => {
            return (
              <div key={Duty.ID}>
                {/* begin::Body */}
                <div className="card-body pt-2">
                  {/* begin: Item */}
                  <div className="d-flex flex-wrap align-items-center mb-10">
                    {/* begin::Title */}
                    <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3">
                      <a
                        href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                      >
                        Start's At:
                      </a>
                      <span className="text-muted font-weight-bold font-size-sm my-1">
                        {Duty.StartTime}
                      </span>
                      <a
                        href="#"
                        className="text-dark-75 font-weight-bolder text-hover-primary font-size-lg"
                      >
                        End's At:
                      </a>
                      <span className="text-muted font-weight-bold font-size-sm my-1">
                        {Duty.EndTime}
                      </span>
                    </div>
                    {/* end::Title */}

                    {/* begin::Info */}
                    <div className="d-flex align-items-center py-lg-0 py-2">
                      <div className="d-flex flex-column text-right">
                        <span className="text-dark-75 font-weight-bolder font-size-h4">
                          {Duty.Area}
                        </span>
                        <span className="text-muted font-weight-bolder font-size-sm">
                          Area
                        </span>
                      </div>
                    </div>
                    {/* end::Info */}
                  </div>
                  {/* end: Item */}
                </div>
                {/* end::Body */}
              </div>
            );
          })}{" "}
        {/* end::List Widget 14 */}
      </div>
    </>
  );
}
