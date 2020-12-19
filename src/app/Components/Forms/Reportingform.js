import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect, useSelector, shallowEqual } from "react-redux";
import Table from "react-bootstrap/Table";
import LineChart from "../charts/line";
import PieChart from "../charts/Pie";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { DateAndTimePickers } from "..";
import { SimpleSelect } from "./Selector";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ["Select time slot for report", "Select area", "Generate report"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          Start Date:
          <br />
          <DateAndTimePickers />
          <br />
          End Date:
          <br />
          <DateAndTimePickers />
        </div>
      );
    case 1:
      return (
        <div>
          <SimpleSelect />
        </div>
      );
    case 2:
      return `By generation this report i agree not to use it for illegal porpose`;
    default:
      return "Unknown step";
  }
}

export class Reportingform extends React.Component {
  render() {
    const Duties = this.props.Duties;
    console.log(Duties);
    return (
      <div className="App">
        <div className={`card gutter-b`}>
          {/* Head */}
          <div className="card-header border-0 py-5">
            <h3 className="card-title align-items-start flex-column">
              <span className="card-label font-weight-bolder text-dark">
                Warden Responsibilities
              </span>
            </h3>
          </div>
          {/* Body */}
          <div className="card-body pt-0 pb-3">
            <div className="tab-content">
              <div className="table-responsive">
                <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                  <thead>
                    <tr className="text-left text-uppercase">
                      <th className="pl-7" style={{ minWidth: "250px" }}>
                        <span className="text-dark-75">Wardens</span>
                      </th>
                      <th style={{ minWidth: "100px" }}>Start Time</th>
                      <th style={{ minWidth: "100px" }}>End Time</th>
                      <th style={{ minWidth: "100px" }}>Assigned Area</th>
                      <th style={{ minWidth: "130px" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {Duties &&
                      Duties.map((Duty) => {
                        return (
                          <tr key={Duty.id}>
                            <td className="pl-0 py-8">
                              <div className="d-flex align-items-center">
                                <div>
                                  <a
                                    href="#"
                                    className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg"
                                  >
                                    {Duty.FirstName} {Duty.LastName}
                                  </a>
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

        <p class="font-weight-bold">Table</p>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Warden Name</th>
              <th>Area of Duty</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
          </tbody>
        </Table>
        <div className="chart">
          <LineChart />
          <PieChart />
          <br></br>
          <br></br>
          <br></br>
          <p>Mostly Congested Areas</p>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Area</th>
                <th>Time</th>
                <th>Congestion</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
export default Reportingform;
