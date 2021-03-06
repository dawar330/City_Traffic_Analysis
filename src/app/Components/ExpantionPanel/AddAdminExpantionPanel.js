import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import Select from "react-select";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { db } from "../../../config/fbConfig";
import { MakeAdmin } from "../../../redux/actions/VardenActions";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function AddAdminexpantionpanel(props) {
  const items = [];
  const [NonAdmins, setNonAdmins] = useState();
  const [Varden, setVarden] = useState();
  React.useEffect(() => {
    db.collection("Users")
      .where("isadmin", "==", false)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push({
            email: doc.data().Email,
            value: doc.id,
            label: doc.data().FirstName + " " + doc.data().LastName,
          });
        });
        setNonAdmins(items);
      });
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/Communication/Add-user.svg")}
            ></SVG>
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="font-weight-bold">
            Add Adminstrator Users
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Select
            options={NonAdmins}
            name="Id"
            placeholder="Select Varden"
            isSearchable
            autosize={true}
            onChange={setVarden}
            required
          />
          &nbsp;&nbsp;
          <Button
            type="submit"
            onClick={() => {
              console.log(Varden.value);
              props.MakeAdmin(Varden);
              store.addNotification({
                title: "Admin Role Added",
                message: `${Varden.label} now has Admin Access!`,
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
            }}
          >
            Add Admin Acces
          </Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
const mapdispatchtoprops = (dispatch) => {
  return {
    MakeAdmin: (User) => dispatch(MakeAdmin(User)),
  };
};
export default connect(null, mapdispatchtoprops)(AddAdminexpantionpanel);
