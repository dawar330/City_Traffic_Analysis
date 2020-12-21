import React from "react";
import { Line } from "react-chartjs-2";

function LineChart() {
  const data = {
    labels: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
    ],
    datasets: [
      {
        label: "Conjestion",
        fill: false,
        data: [
          0.0,
          0.0,
          0.0,
          5.648828610356268,
          4.817823045802506,
          3.41973738007358,
          3.6619432659050646,
          5.076782500763633,
          6.270798384363134,
          6.770115699491606,
          7.365136213141215,
          7.935826297322397,
          8.468128346095881,
          8.710136622522986,
          9.192849159037744,
          9.64609576182404,
          9.760330136210044,
          10.226905549354235,
          10.708548971624056,
          11.118811889806324,
          11.932655650739381,
          8.896007852750465,
        ],
        backgroundColor: ["rgba(255,206,86,0.2)"],
        borderColor: ["rgba(255,206,86,0.2)"],
        pointBackgroundColor: ["rgba(255,206,86,0.2)"],
        pointBorderColor: ["rgba(255,206,86,0.2)"],
      },
    ],
  };
  const options = {
    title: {
      display: true,
      text: "",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 100,
            stepSize: 10,
          },
        },
      ],
    },
  };
  return <Line data={data} options={options} />;
}
export default LineChart;
