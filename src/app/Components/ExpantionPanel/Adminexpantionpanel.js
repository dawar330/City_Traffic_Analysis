import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { db } from "../../../config/fbConfig";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Adminexpantionpanel(props) {
  const items = [];

  const [Admins, setAdmins] = useState();
  React.useEffect(() => {
    db.collection("Users")
      .where("isadmin", "==", true)
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          items.push({
            id: doc.id,
            FirstName: doc.data().FirstName,
            LastName: doc.data().LastName,
          });
        });
      })
      .then(() => {
        setAdmins(items);
        console.log(Admins);
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }, []);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={
            <img
              src={toAbsoluteUrl("/media/svg/icons/Communication/Admin.png")}
            />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="font-weight-bold">
            Veiw Adminstrator Users
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {Admins &&
              Admins.map((Admin, index) => {
                index++;
                return (
                  <li key={Admin.id}>
                    {index}. {Admin.FirstName} {Admin.LastName}
                  </li>
                );
              })}
          </Typography>
          <br />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
