import React from "react";
import {useSubheader} from "../../_metronic/layout";
import  WardenResponsibilityWidget  from "../Components/Widgets/WardenResponsibilityWidget";
import {connect} from 'react-redux';

import { compose } from "redux";


 const WardenResponsibilitiesPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");
  
  

  
  return (
    <div className="row">
    <div className="col-lg-12">
                    <WardenResponsibilityWidget className="card-stretch gutter-b" />
                </div>
                </div>
  );
}
const mapStateToProps = (state) => {
  return {
    Duties: state.firestore.ordered.VardenDuties
    
  }
}
export default compose(
  
  connect(mapStateToProps)
)
(WardenResponsibilitiesPage)
