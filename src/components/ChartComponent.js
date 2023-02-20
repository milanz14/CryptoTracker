import { useState } from "react";

import { Chart } from "react-google-charts";

const ChartComponent = (props) => {
  const { priceData } = props;
  const [lastThirtyDays, setLastThirtyDays] = useState([]);

  if (priceData) {
    const newData = priceData.map((price) => price[1]);
    setLastThirtyDays(...newData);
  }

  // const data = [["x"], ...pricing30Days];

  // const options = {
  //   hAxis: {
  //     title: "Last 30 days",
  //   },
  //   vAxis: {
  //     title: "Price",
  //   },
  //   series: {
  //     1: { curveType: "function" },
  //   },
  // };

  console.log(priceData);

  return (
    // <Chart
    //   chartType="LineChart"
    //   width="100%"
    //   height="400px"
    //   data={data}
    //   options={options}
    // />
    <div>Chart</div>
  );
};

export default ChartComponent;
