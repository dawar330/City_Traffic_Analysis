/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import SVG from "react-inlinesvg";
import { ModalProgressBar } from "../../../_metronic/_partials/controls";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { auth } from "firebase";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

function ChangePassword(props) {
  // Fields
  const [loading, setloading] = useState(false);
  const [isError, setisError] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user, shallowEqual);
  useEffect(() => {}, [user]);
  // Methods
  const saveUser = (values, setStatus, setSubmitting) => {
    setloading(true);
    setisError(false);
    const updatedUser = Object.assign(user, {
      password: values.password,
    });
    // user for update preparation
    dispatch(props.setUser(updatedUser));
    setTimeout(() => {
      setloading(false);
      setSubmitting(false);
      setisError(true);
      // Do request to your server for user update, we just imitate user update there, For example:
      // update(updatedUser)
      //  .then(()) => {
      //    setloading(false);
      //  })
      //  .catch((error) => {
      //    setloading(false);
      //    setSubmitting(false);
      //    setStatus(error);
      // });
    }, 1000);
  };
  // UI Helpers
  const initialValues = {
    currentPassword: "",
    password: "",
    cPassword: "",
  };
  const [wrongpass, setwrongpass] = useState();
  const Schema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    password: Yup.string()
      .required("New Password is required")
      .min(6, "Minimum 6 symbols"),
    cPassword: Yup.string()
      .required("Password confirmation is required")
      .when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password and Confirm Password didn't match"
        ),
      }),
  });
  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      var user = auth().currentUser;
      var credential = auth.EmailAuthProvider.credential(
        auth().currentUser.email,
        values.currentPassword
      );

      // Prompt the user to re-provide their sign-in credentials

      user
        .reauthenticateWithCredential(credential)
        .then(function() {
          auth().currentUser.updatePassword(values.cPassword);
          store.addNotification({
            title: "Password Changed Successfully",
            message: "Your password has been updated",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
            animationOut: ["animate__animated animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
        })
        .catch(function(error) {
          setwrongpass("The provided Current Password is Incorrect");
          store.addNotification({
            title: "Password Changed Failed",
            message: "The Provided Current Password Was Incorrect",
            type: "warning",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated animate__fadeIn"], // `animate.css v4` classes
            animationOut: ["animate__animated animate__fadeOut"],
            dismiss: {
              duration: 5000,
              onScreen: true,
            },
          });
        });
    },
    onReset: (values, { resetForm }) => {
      resetForm();
    },
  });

  return (
    <form className="card card-custom" onSubmit={formik.handleSubmit}>
      {loading && <ModalProgressBar />}

      {/* begin::Header */}
      <div className="card-header py-3">
        <div className="card-title align-items-start flex-column">
          <h3 className="card-label font-weight-bolder text-dark">
            Change Password
          </h3>
          <span className="text-muted font-weight-bold font-size-sm mt-1">
            Change your account password
          </span>
        </div>
        <div className="card-toolbar">
          <button
            type="submit"
            className="btn btn-success mr-2"
            disabled={
              formik.isSubmitting || (formik.touched && !formik.isValid)
            }
          >
            Save Changes
            {formik.isSubmitting}
          </button>
          <Link
            to="/user-profile/profile-overview"
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Form */}
      <div className="form">
        <div className="card-body">
          {/* begin::Alert */}
          {isError && (
            <div
              className="alert alert-custom alert-light-danger fade show mb-10"
              role="alert"
            >
              <div className="alert-icon">
                <span className="svg-icon svg-icon-3x svg-icon-danger">
                  <SVG
                    src={toAbsoluteUrl("/media/svg/icons/Code/Info-circle.svg")}
                  ></SVG>{" "}
                </span>
              </div>
              <div className="alert-text font-weight-bold">
                Configure user passwords to expire periodically. Users will need
                warning that their passwords are going to expire,
                <br />
                or they might inadvertently get locked out of the system!
              </div>
              <div className="alert-close" onClick={() => setisError(false)}>
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="ki ki-close"></i>
                  </span>
                </button>
              </div>
            </div>
          )}
          {/* end::Alert */}
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-alert">
              Current Password
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                type="password"
                placeholder="Current Password"
                className={`form-control form-control-lg form-control-solid mb-2 ${getInputClasses(
                  "currentPassword"
                )}`}
                name="currentPassword"
                {...formik.getFieldProps("currentPassword")}
              />
              {formik.touched.currentPassword &&
              formik.errors.currentPassword ? (
                <div className="invalid-feedback">
                  {formik.errors.currentPassword}
                </div>
              ) : null}
              {wrongpass && (
                <div>
                  <p style={{ color: "red" }}>{wrongpass}</p>
                </div>
              )}
              <a href="#" className="text-sm font-weight-bold">
                Forgot password ?
              </a>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-alert">
              New Password
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                type="password"
                placeholder="New Password"
                className={`form-control form-control-lg form-control-solid ${getInputClasses(
                  "password"
                )}`}
                name="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="invalid-feedback">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>
          <div className="form-group row">
            <label className="col-xl-3 col-lg-3 col-form-label text-alert">
              Verify Password
            </label>
            <div className="col-lg-9 col-xl-6">
              <input
                type="password"
                placeholder="Verify Password"
                className={`form-control form-control-lg form-control-solid ${getInputClasses(
                  "cPassword"
                )}`}
                name="cPassword"
                {...formik.getFieldProps("cPassword")}
              />
              {formik.touched.cPassword && formik.errors.cPassword ? (
                <div className="invalid-feedback">
                  {formik.errors.cPassword}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* end::Form */}
    </form>
  );
}

export default ChangePassword;
