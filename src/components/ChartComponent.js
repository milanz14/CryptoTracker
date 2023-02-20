import { Chart } from "react-google-charts";

const ChartComponent = (props) => {
  const { coinPrices } = props;

  let data = [["Days", "Price"]];

  for (let i = 0; i < coinPrices.length; i++) {
    data = [...data, [coinPrices.length - 1 - i, Number(coinPrices[i][0])]];
  }

  const options = {
    title: `Prices for the last ${data.length - 1} days`,
    curveType: "function",
    lineWidth: 5,
  };

  return (
    <Chart chartType="LineChart" data={data} options={options} height="400px" />
  );
};

export default ChartComponent;
