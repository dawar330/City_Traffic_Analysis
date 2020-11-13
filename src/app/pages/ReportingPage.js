import React from "react";
import {useSubheader} from "../../_metronic/layout";
import {Reportingform} from "../Components/Forms/Reportingform";



export const ReportingPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("My Custom title");

  return (<div className="row">
    <div className="col-xxl-12 order-2 order-xxl-1">
      <Reportingform/>
    </div>
  </div>);
};
