/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useState, useEffect } from "react";

import objectPath from "object-path";
import ApexCharts from "apexcharts";
import { Dropdown } from "react-bootstrap";
import { useHtmlClassService } from "../../../_metronic/layout";
import { DropdownMenu2 } from "../../../_metronic/_partials/dropdowns";

export function TrafficStatsWidget({ className }) {
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
      colorsThemeBaseDanger: objectPath.get(
        uiService.config,
        "js.colors.theme.base.danger"
      ),
      fontFamily: objectPath.get(uiService.config, "js.fontFamily"),
    };
  }, [uiService]);
  //---------- NEW CODE HERE -----------
  const [initialData, setInitialData] = useState([{}]);
  // ----------- END NEW CODE HERE ---------------
  useEffect(() => {
    //---- NEW CODE ------------
    fetch("/api")
      .then((response) => response.json())
      .then((data) => setInitialData(data));

    //----- END NEW CODE
    const element = document.getElementById("kt_mixed_widget_1_chart");
    if (!element) {
      return;
    }
    const day_cars_list = initialData.day_cars_list;
    const options = getChartOptions(layoutProps);

    const chart = new ApexCharts(element, options);
    chart.render();
    return function cleanUp() {
      chart.destroy();
    };
  }, [layoutProps]);

  return (
    <div className={`card card-custom bg-gray-100 ${className}`}>
      {/* Header */}
      <div className="card-header border-0 bg-danger py-5">
        <h3 className="card-title font-weight-bolder text-white">
          Traffic Stats
        </h3>
      </div>
      {/* Body */}
      <div className="card-body p-0 position-relative overflow-hidden">
        {/* Chart */}
        <div
          id="kt_mixed_widget_1_chart"
          className="card-rounded-bottom bg-danger"
          style={{ height: "200px" }}
        ></div>

        {/* Stat */}
        <div className="card-spacer mt-n25">
          <div className="row m-0">
            <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
              <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                <a
                  href="#"
                  className="text-warning font-weight-bold font-size-h6"
                >
                  {initialData.total_cars}
                </a>
              </span>
              <a
                href="#"
                className="text-warning font-weight-bold font-size-h6"
              >
                Total Cars
              </a>
            </div>
            <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
              <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                <a
                  href="#"
                  className="text-primary font-weight-bold font-size-h6 mt-2"
                >
                  {initialData.avg_cars}
                </a>
              </span>
              <a
                href="#"
                className="text-primary font-weight-bold font-size-h6 mt-2"
              >
                Average Car
              </a>
            </div>
          </div>
          <div className="row m-0">
            <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
              <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                <a
                  href="#"
                  className="text-danger font-weight-bold font-size-h6 mt-2"
                >
                  {initialData.current_congestion}
                </a>
              </span>
              <a
                href="#"
                className="text-danger font-weight-bold font-size-h6 mt-2"
              >
                Current Conjestion
              </a>
            </div>
            <div className="col bg-light-success px-6 py-8 rounded-xl">
              <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                <a
                  href="#"
                  className="text-success font-weight-bold font-size-h6 mt-2"
                >
                  {initialData.avg_congestion}
                </a>
              </span>
              <a
                href="#"
                className="text-success font-weight-bold font-size-h6 mt-2"
              >
                Average Conjestion
              </a>
            </div>
          </div>
        </div>

        {/* Resize */}
        <div className="resize-triggers">
          <div className="expand-trigger">
            <div style={{ width: "411px", height: "461px" }} />
          </div>
          <div className="contract-trigger" />
        </div>
      </div>
    </div>
  );
}

function getChartOptions(layoutProps) {
  const strokeColor = "#D13647";

  const options = {
    series: [
      {
        name: "Average No. Cars",
        data: [
          36.0,
          60.16666666666666,
          72.36363636363636,
          75.11764705882355,
          73.24797275381124,
          69.27163725407415,
          70.85780851838368,
          71.31640773020085,
          72.07483466759484,
          73.22823233428134,
          74.01579083613771,
          72.91918660287082,
          73.60786732456141,
          74.30947024833488,
          72.66044023863401,
          72.11486299474122,
          71.69363278713571,
          70.10929240640152,
          68.81881226458268,
          33.0989010989011,
        ],
      },
    ],
    chart: {
      type: "area",
      height: 200,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 3,
        color: strokeColor,
        opacity: 0.5,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 0,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [strokeColor],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
      crosshairs: {
        show: false,
        position: "front",
        stroke: {
          color: layoutProps.colorsGrayGray300,
          width: 1,
          dashArray: 3,
        },
      },
    },
    yaxis: {
      min: 0,
      max: 80,
      labels: {
        show: false,
        style: {
          colors: layoutProps.colorsGrayGray500,
          fontSize: "12px",
          fontFamily: layoutProps.fontFamily,
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: layoutProps.fontFamily,
      },
      y: {
        formatter: function(val) {
          return val + " Cars";
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["transparent"],
    markers: {
      colors: layoutProps.colorsThemeBaseDanger,
      strokeColor: [strokeColor],
      strokeWidth: 3,
    },
  };
  return options;
}
export default TrafficStatsWidget;
