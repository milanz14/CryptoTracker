import { useState, useEffect } from "react";

import "../styles/CoinModal.css";

import Spinner from "./Spinner";
import ChartComponent from "./ChartComponent";

const CoinModal = (props) => {
  const { name, setIsModalShowing, priceData } = props;

  const [coinPrices, setCoinPrices] = useState(null);

  useEffect(() => {
    const extractedDailyPrices = priceData.map((price) => price[1].toFixed(3));
    console.log(extractedDailyPrices);
    setCoinPrices(extractedDailyPrices);
  }, [priceData]);

  return (
    <>
      <div className="modal-container">
        {/* <ChartComponent priceData={coinPrices} /> */}
        <div className="modal-header">
          <div className="modal-header-item title">Coin: {name}</div>
          <button
            className="modal-header-item"
            onClick={() => setIsModalShowing((prev) => !prev)}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <p>Last 30 days</p>
          {coinPrices && <ChartComponent coinPrices={coinPrices} />}
        </div>
      </div>
    </>
  );
};

export default CoinModal;
