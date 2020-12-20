/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo, useState,useEffect} from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import {useHtmlClassService} from "../../../_metronic/layout";
import {KTUtil} from "../../../_metronic/_assets/js/components/util";

export function UserWidget({ className }) {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray100: objectPath.get(uiService.config, "js.colors.gray.gray100"),
      colorsGrayGray700: objectPath.get(uiService.config, "js.colors.gray.gray700"),
      colorsThemeBaseSuccess: objectPath.get(
          uiService.config,
          "js.colors.theme.base.success"
      ),
      colorsThemeLightSuccess: objectPath.get(
          uiService.config,
          "js.colors.theme.light.success"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily")
    };
  }, [uiService]);
//---------- NEW CODE HERE -----------
  const  [initialData,setInitialData]= useState([{}]);
// ----------- END NEW CODE HERE ---------------
  useEffect(() => {
      //---- NEW CODE ------------
        fetch('/api').then(
         response=>response.json(),
        ).then(data=>setInitialData(data))

       

    //----- END NEW CODE
    const element = document.getElementById("kt_mixed_widget_14_chart");
    if (!element) {
      return;
    }

    const height = parseInt(KTUtil.css(element, 'height'));
    const congestion = parseInt(initialData.current_congestion)
    const options = getChartOptions(layoutProps, height,congestion);

    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  return (
    <div className={`card card-custom ${className}`}>
      {/* Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title font-weight-bolder ">Current Conjestion</h3>
        
      </div>
      {/* Body */}
      <div className="card-body d-flex flex-column">
        <div className="flex-grow-1">
          <div id="kt_mixed_widget_14_chart" style={{height: "200px"}}>{initialData.current_congestion}</div>
        </div>
        <div className="pt-5">
          <p className="text-center font-weight-normal font-size-lg pb-7">
            Notes: Conjestion must be kept less than<br/>
            70 % 
          </p>
          <a href="/Reporting" className="btn btn-success btn-shadow-hover font-weight-bolder w-100 py-3">Generate Report</a>
        </div>
      </div>
    </div>
  );
}



function getChartOptions(layoutProps, height,congestion) {
  const options = {
    series: [10],
    chart: {
      height: height,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 0,
          size: "65%"
        },
        dataLabels: {
          showOn: "always",
          name: {
            show: false,
            fontWeight: "700",
          },
          value: {
            color: layoutProps.colorsGrayGray700,
            fontSize: "30px",
            fontWeight: "700",
            offsetY: 12,
            show: true
          },
        },
        track: {
          background: layoutProps.colorsThemeLightSuccess,
          strokeWidth: '100%'
        }
      }
    },
    colors: [layoutProps.colorsThemeBaseSuccess],
    stroke: {
      lineCap: "round",
    },
    labels: ["Conjestion"]
  };
  return options;
}
export default (UserWidget)
