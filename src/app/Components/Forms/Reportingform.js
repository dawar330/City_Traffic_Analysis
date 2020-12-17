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
        <Container>
          <Row>
            <Col xs="2" lg="2" xl="2">
              <Image
                src={toAbsoluteUrl("/media/logos/TMC.jpg")}
                className="App-logo"
                alt="logo"
              />
            </Col>
            <Col col-lg-6 col-xxl-4>
              REPORT
            </Col>
            {/* <Col xs lg="2">
            <Button variant="primary">Primary</Button>
            </Col> */}
          </Row>
          <Row>
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
          </Row>
          <div className="chart">
            <Row>
              <Col lg xs={6}>
                <LineChart />
              </Col>
              <Col lg xs={6}>
                <PieChart />
              </Col>
              <br></br>
              <br></br>
              <br></br>
              <Col lg xs={12}>
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
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default Reportingform;
