/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Nav, Tab } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import firebase from "../../../config/fbConfig";

export function SuggestionsWidget(props) {
  const [key, setKey] = useState("Month");
  const { Suggestions } = props;

  return (
    <div className={`card card-custom card-stretch gutter-b`}>
      {/* Head */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Recomendations
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            There are {Suggestions.length} new Recomendations
          </span>
        </h3>
      </div>
      {/* Body */}
      <div className="card-body pt-3 pb-0">
        <div className="table-responsive">
          <table className="table table-borderless table-vertical-center">
            <thead>
              <tr className="text-left text-uppercase">
                <th className="p-0" style={{ width: "400px" }}>
                  Recomendations
                </th>
                <th className="p-0" />
                <th className="p-0" />
                <th className="p-0" style={{ minWidth: "125px" }} />
                <th className="p-0">Congestion</th>

                <th className="p-0" style={{ minWidth: "100px" }}></th>
              </tr>
            </thead>
            <tbody>
              {Suggestions &&
                Suggestions.map((Suggestion) => {
                  return (
                    <tr key={Suggestion.id}>
                      <td className="pl-0 py-4">
                        {" "}
                        <span className="text-dark-75  d-block font-size-lg">
                          {Suggestion.Description}
                        </span>
                      </td>
                      <td className="pl-0"></td>
                      <td className="text-right"></td>
                      <td className="text-right">
                        <span className="text-muted font-weight-500"></span>
                      </td>
                      <td className="text-left">
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {Suggestion.conjestion}
                        </span>
                      </td>
                      <td className="text-right pr-0">
                        <a
                          href="#"
                          className="btn btn-icon btn-light btn-sm"
                          onClick={() => {
                            const db = firebase.firestore();
                            db.collection("Suggestions")
                              .doc(Suggestion.id)
                              .delete();
                          }}
                        >
                          <span className="svg-icon svg-icon-md svg-icon-primary">
                            <SVG
                              src={toAbsoluteUrl(
                                "/media/svg/icons/General/Trash.svg"
                              )}
                            ></SVG>
                          </span>
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
