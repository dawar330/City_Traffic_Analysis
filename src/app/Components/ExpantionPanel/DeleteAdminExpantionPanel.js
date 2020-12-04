import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select'; 
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { db } from '../../../config/fbConfig';
import { DeleteAdmin, MakeAdmin } from '../../../redux/actions/VardenActions';
import { Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

 function DeleteAdminexpantionpanel(props) {
  
  const items = []
  const [Admins, setAdmins] = useState();
  const [Varden, setVarden] = useState();
  React.useEffect(()=>{
    
         db.collection("Users").where("isadmin","==",true).get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              // doc.data() is never undefined for query doc snapshots
              items.push({value:doc.id ,label:doc.data().FirstName +" " +doc.data().LastName});
              
          })
      }).then(setAdmins(items))
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
  
    
  },[])
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={ 
          <SVG
            src={toAbsoluteUrl(
              "/media/svg/icons/Communication/Delete-user.svg"
            )}
          ></SVG>
        }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="font-weight-bold">
          Delete Adminstrator Users
            </Typography>           
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Select 
                  options={Admins}  
                  name="Id"
                  placeholder="Select Varden"
                  isSearchable 
                  autosize={true} 
                  onChange={setVarden} 
                  required
                  />
                  &nbsp;&nbsp;
          <Button onClick={()=>{
                props.DeleteAdmin(Varden)
                store.addNotification({
                  title: "Admin Role Removed",
                  message: `${Varden.label}'s all Admin rights are removed!`,
                  type: "warning",
                  insert: "top",
                  container: "top-right",
                  animationIn: ['animate__animated animate__fadeIn'], // `animate.css v4` classes
                   animationOut: ['animate__animated animate__fadeOut'],
                  dismiss: {
                    duration: 5000,
                    onScreen: true
                  }
                });
          }}>Remove Admin Acces</Button>
         
            

        </ExpansionPanelDetails>
      </ExpansionPanel>

      
    </div>
  );
}

const mapdispatchtoprops = dispatch => {
  return {
    DeleteAdmin: (User) => dispatch(DeleteAdmin(User))
    
  }
}
export default connect(null, mapdispatchtoprops)(DeleteAdminexpantionpanel)