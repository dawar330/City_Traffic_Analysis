import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    return (
      <div className="App">
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
