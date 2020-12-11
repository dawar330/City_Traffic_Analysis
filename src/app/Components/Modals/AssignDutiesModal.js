import React, { Component } from "react";
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { createDuty } from "../../../redux/actions/DutiesActions";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { MenuItem, TextField } from "@material-ui/core";
import { object } from "yup";

import Select from "react-select";

export function AssignDutiesModal(propss) {
  const { Vardens } = propss;
  const { Duties } = propss;
  const [Varden, setVarden] = React.useState([]);
  const [Area, setArea] = React.useState([]);
  const areaoptions = [
    { value: "F 10", label: "F 10" },
    { value: "F 9", label: "F 9" },
    { value: "F 8", label: "F 8" },
    { value: "F 7", label: "F 7" },
    { value: "F 6", label: "F 6" },
    { value: "F 5", label: "F 5" },
  ];
  return (
    <Formik
      initialValues={{
        FirstName: "",
        StartTime: "",
        EndTime: "",
        Id: "",
        Area: "",
      }}
      onSubmit={(values, formikHelpers) => {
        console.log(values);
        propss.createDuty(values);

        propss.onHide();
      }}
      validationSchema={object({
        FirstName: Yup.string(),

        StartTime: Yup.date().required("Start Time is Required"),
        EndTime: Yup.date().required("End Time is Required"),
        Id: Yup.string().required("Varden is requiered"),
        Area: Yup.string().required("Area is requiered"),
      })}
    >
      {({
        values,
        handleChange,
        setFieldTouched,
        handleSubmit,
        setFieldValue,
      }) => (
        <Modal show={propss.show} onHide={propss.onHide}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Warden
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div>
                <Select
                  options={Vardens}
                  name="Id"
                  placeholder="Select Varden"
                  onBlur={setFieldTouched}
                  isSearchable
                  className="mb-3"
                  onChange={setVarden}
                  required
                />
                <Select
                  options={areaoptions}
                  name="Area"
                  placeholder="Select Area"
                  onBlur={setFieldTouched}
                  isSearchable
                  className="mb-3"
                  onChange={setArea}
                  required
                />
                <Field
                  name="StartTime"
                  type="datetime-local"
                  as={TextField}
                  label="Start Time"
                />
                <br />
                <ErrorMessage name="StartTime" />
                <br />
                <Field
                  name="EndTime"
                  type="datetime-local"
                  as={TextField}
                  label="End Time"
                />
                <br />
                <ErrorMessage name="EndTime" />
                <br />
                <Button onClick={propss.onHide}>Close</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                  type="submit"
                  onClick={() => {
                    values.Area = Area.value;
                    values.Id = Varden.value;
                    values.FirstName = Varden.label;

                    console.log(values);
                  }}
                >
                  ADD
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      )}
    </Formik>
  );
}

const mapdispatchtoprops = (dispatch) => {
  return {
    createDuty: (Duty) => dispatch(createDuty(Duty)),
  };
};
export default connect(null, mapdispatchtoprops)(AssignDutiesModal);
