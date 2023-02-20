import { useState } from "react";

import { Chart } from "react-google-charts";

const ChartComponent = (props) => {
  const { coinPrices } = props;

  const data = [["x"], ...coinPrices];

  const options = {
    hAxis: {
      title: "Last 30 days",
    },
    vAxis: {
      title: "Price",
    },
    series: {
      1: { curveType: "function" },
    },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default ChartComponent;
