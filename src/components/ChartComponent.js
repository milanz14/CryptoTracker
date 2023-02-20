import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

const ChartComponent = (props) => {
  const { coinPrices } = props;

  return <>This is where the chart will go.</>;
};

export default ChartComponent;
