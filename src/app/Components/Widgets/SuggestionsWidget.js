/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { Nav, Tab } from "react-bootstrap";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_metronic/_helpers";
import firebase from "../../../config/fbConfig";

export function SuggestionsWidget(props) {
  const [key, setKey] = useState("Month");
  const {Suggestions} = props
  

  return (
    <div className={`card card-custom card-stretch gutter-b`}>
      {/* Head */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label font-weight-bolder text-dark">
            Suggestions
          </span>
          <span className="text-muted mt-3 font-weight-bold font-size-sm">
            There are {Suggestions.length} new Suggestions
          </span>
        </h3>
        <div className="card-toolbar">
          <Tab.Container defaultActiveKey={key}>
            <Nav
              as="ul"
              onSelect={_key => setKey(_key)}
              className="nav nav-pills nav-pills-sm nav-dark-75"
            >
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Month"
                  className={`nav-link py-2 px-4 ${
                    key === "Month" ? "active" : ""
                  }`}
                >
                  Month
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Week"
                  className={`nav-link py-2 px-4 ${
                    key === "Week" ? "active" : ""
                  }`}
                >
                  Week
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="nav-item" as="li">
                <Nav.Link
                  eventKey="Day"
                  className={`nav-link py-2 px-4 ${
                    key === "Day" ? "active" : ""
                  }`}
                >
                  Day
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-3 pb-0">
        <div className="table-responsive">
          <table className="table table-borderless table-vertical-center">
            <thead>
              <tr className="text-left text-uppercase">
                <th className="p-0" style={{ width: "50px" }}>Suggestions</th>
                <th className="p-0" style={{ minWidth: "200px" }} />
                <th className="p-0" style={{ minWidth: "100px" }} />
                <th className="p-0" style={{ minWidth: "125px" }}/>
                <th className="p-0" style={{ minWidth: "110px" }} />
                <th className="p-0" style={{ minWidth: "150px" }}>Priority</th> 
              </tr>
            </thead>
            <tbody>
            {Suggestions && Suggestions.map(Suggestion => {

return (
  <tr key = {Suggestion.id}>
  <td className="pl-0 py-4">
    <div className="symbol symbol-50 symbol-light">
      <span className="symbol-label">
        <SVG
          className="h-50 align-self-center"
          src={toAbsoluteUrl("/media/svg/misc/015-telegram.svg")}
        ></SVG>
      </span>
    </div>
  </td>
  <td className="pl-0">
    <a
      href="#"
      className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
    >
      {Suggestion.Description}
    </a>
    <div>
     
      <a
        className="text-muted font-weight-bold text-hover-primary"
        href="#"
      >
        
      </a>
    </div>
  </td>
  <td className="text-right">
    <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
   
    </span>

  </td>
  <td className="text-right">
    <span className="text-muted font-weight-500">
    
    </span>
  </td>
  <td className="text-right">
    <span className="label label-lg label-light-warning label-inline">
      Medium
    </span>
  </td>
  <td className="text-right pr-0">
    
    <a href="#" className="btn btn-icon btn-light btn-sm" onClick={()=>{
      const db = firebase.firestore()
      db.collection("Suggestions").doc(Suggestion.id).delete()
    }}>
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
