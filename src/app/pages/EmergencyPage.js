import React from "react";
import { Table } from "react-bootstrap";
import { useSubheader } from "../../_metronic/layout";

export const EmergencyPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Emergency Page");
  const numbers = [
    { no: 1, Department: "Emergency helpline", Number: "15" },
    { no: 2, Department: "Police", Number: "9100008" },
    { no: 3, Department: "Fire brigade", Number: "9100008" },
    {
      no: 4,
      Department: "National Counter Terrorism Authority (NACTA) Helpline",
      Number: "1717",
    },
    { no: 5, Department: "Bomb Disposal Squad", Number: "1332" },
    { no: 6, Department: "Islamabad Traffic Police", Number: "915" },
    { no: 7, Department: "Terror related Helpline", Number: "1717" },
  ];

  return (
    <div>
      <div className={`card card-custom card-stretch gutter-b`}>
        {/* Head */}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">
              Emergency Contacts
            </span>
          </h3>
          <div className="card-toolbar"></div>
        </div>
        {/* Body */}
        <div className="card-body pt-0 pb-3">
          <div className="tab-content">
            <div className="table-responsive">
              <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                <thead>
                  <tr className="text-left text-uppercase">
                    <th className="pl-7" style={{ minWidth: "250px" }}>
                      <span className="text-dark-75">Sr.No</span>
                    </th>
                    <th style={{ minWidth: "100px" }}>Department</th>
                    <th style={{ minWidth: "100px" }}>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {numbers.map((Number) => {
                    return (
                      <tr key={Number.no}>
                        <td className="pl-0 py-8">
                          <div className="d-flex align-items-center">
                            {/* <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label">
                                <span className="svg-icon h-75 align-self-end"></span>
                              </span>
                            </div> */}
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                              >
                                {Number.no}
                              </a>
                              <span className="text-muted font-weight-bold d-block"></span>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                            {Number.Department}
                          </span>
                          <span className="text-muted font-weight-bold"></span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg"></span>
                          {Number.Number}
                          <span className="text-muted font-weight-bold"></span>
                        </td>
                        <td>
                          <span className="text-dark-75 font-weight-bolder d-block font-size-lg"></span>
                          <span className="text-muted font-weight-bold"></span>
                        </td>
                        <td></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
