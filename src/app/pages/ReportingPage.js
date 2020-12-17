import React, { useRef } from "react";
import { useSubheader } from "../../_metronic/layout";
import Reportingform from "../Components/Forms/Reportingform";
import { useReactToPrint } from "react-to-print";

export const ReportingPage = () => {
  const suhbeader = useSubheader();
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  suhbeader.setTitle("My Custom title");

  return (
    <div className="row">
      <div className="col-xxl-12 order-2 order-xxl-1">
        <Reportingform ref={componentRef} />
        <button class="btn btn-primary" size="lg" onClick={handlePrint}>
          Print
        </button>
      </div>
    </div>
  );
};
