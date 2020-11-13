import React from "react";
import {VardenProfilesWidget} from "../Components/Widgets/VardenProfilesWidget";
import {connect} from 'react-redux';
import firebase from "../../config/fbConfig";
import { compose } from "redux";



function  ProfilePage () {

  const [Vardens, setVardens] = React.useState([])
  const ref = firebase.firestore().collection("Vardens");
  React.useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({...doc.data(),id:doc.id});
      })
      setVardens(items);
    })
  })


return (<div className="row">
    <div className="col-lg-12">
      {<VardenProfilesWidget Vardens={Vardens} className="card-stretch gutter-b" />} 
                
              </div>
              </div>);
};
const mapStateToProps = (state) => {
  return {
    profiles: state.firestore.ordered.Vardens
    
  }
}
export default compose(
  
  connect(mapStateToProps)
  ) (ProfilePage)