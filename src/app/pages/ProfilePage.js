import React from "react";
import {VardenProfilesWidget} from "../Components/Widgets/VardenProfilesWidget";
import {connect, useSelector, shallowEqual} from 'react-redux';
import firebase from "../../config/fbConfig";




function  ProfilePage () {
  const {vardenerr} = useSelector(
    ({profiles}) => ({
        vardenerr: profiles.vardenerr ,
    }),
    shallowEqual
  );

  const [Vardens, setVardens] = React.useState([])
  const ref = firebase.firestore().collection("Users");
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
{vardenerr && <span style={{color: "red"}}>{vardenerr}</span>}          
              </div>
              </div>);
};
const mapStateToProps = (state) => {
console.log(state)
  return {
    profiles: state.firestore.ordered.Vardens
    
  }
}
export default 
  
  connect(mapStateToProps, null)
   (ProfilePage)