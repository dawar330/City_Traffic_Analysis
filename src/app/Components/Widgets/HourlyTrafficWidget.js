/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo,useState, useEffect} from "react";
import objectPath from "object-path";
import ApexCharts from "apexcharts";
import {useHtmlClassService} from "../../../_metronic/layout";



export function HourlyTrafficWidget({ className }) {
  const uiService = useHtmlClassService();
  const layoutProps = useMemo(() => {
    return {
      colorsGrayGray500: objectPath.get(
        uiService.config,
        "js.colors.gray.gray500"
      ),
      colorsGrayGray200: objectPath.get(
        uiService.config,
        "js.colors.gray.gray200"
      ),
      colorsGrayGray300: objectPath.get(
        uiService.config,
        "js.colors.gray.gray300"
      ),
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
    const element = document.getElementById("kt_stats_widget_7_chart");

    if (!element) {
      return;
    }
    const days = initialData.day_congestion_list;
    const options = getChartOption(layoutProps,days);
    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  return (
    <div className={`card card-custom ${className}`}>
      <div className="card-body d-flex flex-column p-0">
        <div className="d-flex align-items-center justify-content-between card-spacer flex-grow-1">
          <div className="d-flex flex-column mr-2">
            <a
              href="#"
              className="text-dark-75 text-hover-primary font-weight-bolder font-size-h5"
            >
              Hourly Traffic 
            </a>
            <span className="text-muted font-weight-bold mt-2">
              Your Hourly Traffic Chart
            </span>
          </div>
          <span className="symbol symbol-light-success symbol-45">
            <span className="symbol-label font-weight-bolder font-size-h6">
              +57
            </span>
          </span>
        </div>
        <div
          id="kt_stats_widget_7_chart"
          className="card-rounded-bottom"
          style={{ height: "150px" }}
        ></div>
      </div>
    </div>
  );
}

function getChartOption(layoutProps,days) {
  const options = {
    series: [
      {
        name: "Conjestion",
        data: [0.0,5.648828610356268,4.817823045802506,3.41973738007358,3.6619432659050646,5.076782500763633,6.270798384363134,6.770115699491606,7.365136213141215,
               7.935826297322397,8.468128346095881,8.710136622522986,9.192849159037744,9.64609576182404,
               9.760330136210044,10.226905549354235,10.708548971624056,11.118811889806324,11.932655650739381,8.896007852750465]//[10,10,10,10]
        /*data: [30, 45, 32, 70, 40]*/
      }
    ],
    chart: {
      type: "area",
      height: 150,
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {},
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      type: "solid",
      opacity: 1
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [layoutProps.colorsThemeBaseSuccess]
    },
    xaxis: {
      categories: ["9am - 1pm", "1pm - 5pm", "5pm - 9pm", "9pm - 1am", "1am - 5am", "5am - 9am"],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3
        }
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      }
    },
    yaxis: {
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily
        }
      }
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0
        }
      },
      hover: {
        filter: {
          type: "none",
          value: 0
        }
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0
        }
      }
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: layoutProps.fontFamily
      },
      y: {
        formatter: function(val) {
          return  val + "%";
        }
      }
    },
    colors: [layoutProps.colorsThemeLightSuccess],
    markers: {
      colors: [layoutProps.colorsThemeLightSuccess],
      strokeColor: [layoutProps.colorsThemeBaseSuccess],
      strokeWidth: 3
    }
  };
  return options;
}
export default (HourlyTrafficWidget)
