/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from "react";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl} from "../../../_metronic/_helpers";
import {Button} from "react-bootstrap";
import AssignDutiesModal from "../Modals/AssignDutiesModal";
import firebase from "../../../config/fbConfig";



export function WardenResponsibilityWidget(props) {
    const [modalShow1, setModalShow1] = React.useState(false);

    const {Duties} = props
  return (
      <div className={`card card-custom card-stretch gutter-b`}>
        {/* Head */}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">Warden Responsibilities</span>
            <span className="text-muted mt-3 font-weight-bold font-size-sm">{Duties.length} Wardens are Assigned at the momment</span>
          </h3>
          <div className="card-toolbar">
          <Button variant="btn btn-danger font-weight-bolder font-size-sm" onClick={() => setModalShow1(true)}>
        Assign Duties
      </Button>
      <AssignDutiesModal
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />  </div>
        </div>
        {/* Body */}
        <div className="card-body pt-0 pb-3">
          <div className="tab-content">
            <div className="table-responsive">
              <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                <thead>
                <tr className="text-left text-uppercase">
                  <th className="pl-7" style={{minWidth: "250px"}}><span className="text-dark-75">Wardens</span></th>
                  <th style={{minWidth: "100px"}}>Start Time</th>
                  <th style={{minWidth: "100px"}}>End Time</th>
                  <th style={{minWidth: "100px"}}>Assigned Area</th>
                  <th style={{minWidth: "130px"}}></th>
   
                </tr>
                </thead>
                <tbody>
                {Duties && Duties.map(Duty => {
                  return(
                    <tr key={Duty.id}>
                    <td className="pl-0 py-8">
                      <div className="d-flex align-items-center">
                        <div className="symbol symbol-50 symbol-light mr-4">
                            <span className="symbol-label">
                              <span className="svg-icon h-75 align-self-end">
                                <SVG src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}/>
                              </span>
                            </span>
                        </div>
                        <div>
                  <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">{Duty.FirstName} {Duty.LastName}</a>
                          <span className="text-muted font-weight-bold d-block"></span>
                        </div>
                      </div>
                    </td>
                    <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                          {Duty.StartTime.substring(0, 10)}
                        </span>
                      <span className="text-muted font-weight-bold">
                      {Duty.StartTime.substring(11, 17)}
                        </span>
                    </td>
                    <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {Duty.EndTime.substring(0, 10)}
                        </span>
                      <span className="text-muted font-weight-bold">
                      {Duty.EndTime.substring(11, 17)}
                        </span>
                    </td>
                    <td>
                        <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                        {Duty.Area}
                        </span>
                      <span className="text-muted font-weight-bold">
                          
                        </span>
                    </td>
                    <td>
                    <Button variant="btn btn-danger font-weight-bolder font-size-sm" onClick={() => {
                        const db = firebase.firestore()
                        db.collection("VardenDuties").doc(Duty.id).delete()
                    }} >
          Delete
        </Button>  
                    </td>
                    
                  </tr>
                               );
                              })}

                
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
}

export default (WardenResponsibilityWidget)


