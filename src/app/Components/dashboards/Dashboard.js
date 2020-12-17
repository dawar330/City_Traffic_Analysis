import React from "react";
import { connect } from "react-redux";
import TrafficStatsWidget from "../Widgets/TrafficStatsWidget";
import HourlyTrafficWidget from "../Widgets/HourlyTrafficWidget";
import CurrentCongesstionWidget from "../Widgets/CurrentCongesstionWidget";
import UserWidget from "../Widgets/UserWidget";
import TrafficFlowWidget from "../Widgets/TrafficFlowWidget";
import ReactMapboxGl from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Source } from "react-mapbox-gl";
import "./map.css";
import { Layer } from "react-mapbox-gl";
import { ScaleControl } from "react-mapbox-gl";
import { toAbsoluteUrl } from "../../../_metronic/_helpers";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { GeoJSONLayer } from "react-mapbox-gl";

export function Dashboard() {
  const marks = [
    {
      value: 0,
      label: "12 AM",
    },
    {
      value: 1,
      label: "1 AM",
    },
    {
      value: 2,
      label: "2 AM",
    },
    {
      value: 3,
      label: "3 AM",
    },
    {
      value: 4,
      label: "4 AM",
    },
    {
      value: 5,
      label: "5 AM",
    },
    {
      value: 6,
      label: "6 AM",
    },
    {
      value: 7,
      label: "7 AM",
    },
    {
      value: 8,
      label: "8 AM",
    },
    {
      value: 9,
      label: "9 AM",
    },
    {
      value: 10,
      label: "10 AM",
    },
    {
      value: 12,
      label: "12 PM",
    },
    {
      value: 0,
      label: "12 AM",
    },
    {
      value: 13,
      label: "1 PM",
    },
    {
      value: 14,
      label: "2 PM",
    },
    {
      value: 15,
      label: "3 PM",
    },
    {
      value: 16,
      label: "4 PM",
    },
    {
      value: 17,
      label: "5 PM",
    },
    {
      value: 18,
      label: "6 PM",
    },
    {
      value: 19,
      label: "7 PM",
    },
    {
      value: 20,
      label: "8 PM",
    },
    {
      value: 21,
      label: "9 PM",
    },
    {
      value: 22,
      label: "10 PM",
    },
    {
      value: 23,
      label: "11 PM",
    },
  ];
  const Map = new ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZGF3YXIzMzAiLCJhIjoiY2tpYzRibjM0MDdtMTJwcGVndjV1bHV5YSJ9.9y6FYNcRkx0Rp3eNscrX6A",
  });

  function handleChange(event) {
    const hour = event.target.value;
    var filters = ["==", "Hour", hour];
    Map.setFilter("earthquake-circles", filters);
  }

  function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
  }
  const useStyles = makeStyles({
    root: {
      height: 300,
    },
  });
  const classes = useStyles();
  function valuetext(value) {
    return `${value}°C`;
  }
  return (
    <>
      <div className="row">
        <div className="card card-custom card-stretch gutter-b col-lg-12">
          <Map
            style="mapbox://styles/dawar330/ckic7hp091g0019qrpmpm3qxl"
            center={[73.05, 33.701]}
            zoom={[12.3]}
            bearing={[328]}
            filter={["==", "Hour", 1]}
            containerStyle={{
              width: 1200,
              height: 450,
            }}
          >
            <ScaleControl />
            {/* <Source
              id="source_id"
              geoJsonSource={{
                type: "geojson",
                data: toAbsoluteUrl("../../../vehicles.geojson"),
              }}
            > */}
            <GeoJSONLayer
              data={toAbsoluteUrl("../../../vehicles.geojson")}
              symbolLayout={{
                "text-field": "{place}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top",
              }}
            />
            {/* </Source> */}
          </Map>

          <div className="map-overlay map-overlay-inner">
            <React.Fragment>
              P
              <Typography id="discrete-slider" gutterBottom>
                TIME
              </Typography>
              <div className={classes.root}>
                <Slider
                  orientation="vertical"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={0}
                  max={23}
                  onChange={handleChange}
                />
              </div>
            </React.Fragment>
          </div>
        </div>

        <div className="col-lg-6 col-xxl-4">
          <TrafficStatsWidget className="card-stretch gutter-b" />
        </div>

        <div className="col-lg-6 col-xxl-4">
          <HourlyTrafficWidget className="card-stretch card-stretch-half gutter-b" />
          <CurrentCongesstionWidget className="card-stretch card-stretch-half gutter-b" />
        </div>

        <div className="col-lg-4">
          <UserWidget className="card-stretch gutter-b" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <TrafficFlowWidget className="card-stretch gutter-b" />
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
export default connect(mapStateToProps, null)(Dashboard);
