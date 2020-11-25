import React from "react";
import VardenProfilesWidget from "../Components/Widgets/VardenProfilesWidget";
import {connect, useSelector, shallowEqual} from 'react-redux';




function  ProfilePage () {
  const {vardenerr} = useSelector(
    ({profiles}) => ({
        vardenerr: profiles.vardenerr ,
    }),
    shallowEqual
  );

 


return (<div className="row">
    <div className="col-lg-12">
      {<VardenProfilesWidget  className="card-stretch gutter-b" />} 
{vardenerr && <span style={{color: "red"}}>{vardenerr}</span>}          
              </div>
              </div>);
};
const mapStateToProps = (state) => {
console.log(state)
  return {
   
    
  }
}
export default 
  
  connect(mapStateToProps, null)
   (ProfilePage)