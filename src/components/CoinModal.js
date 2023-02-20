import { useState, useEffect } from "react";
import parse from "html-react-parser";

import "../styles/CoinModal.css";

import Spinner from "./Spinner";
import ChartComponent from "./ChartComponent";

const CoinModal = (props) => {
  const { name, setIsModalShowing, priceData, description } = props;
  const [coinPrices, setCoinPrices] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    const extractedDailyPrices = priceData.map((price, idx) => [
      price[1].toFixed(3),
      idx + 1,
    ]);
    setCoinPrices(extractedDailyPrices);
    setIsLoadingData(false);
  }, [priceData]);

  return (
    <>
      <div className="modal-container">
        {isLoadingData && <Spinner />}
        <div className="modal-header">
          <div className="modal-header-item title">Coin: {name}</div>
          <button
            className="modal-header-item"
            onClick={() => setIsModalShowing((prev) => !prev)}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {coinPrices && <ChartComponent coinPrices={coinPrices} />}
          <p>{parse(description)}</p>
        </div>
      </div>
    </>
  );
};

export default CoinModal;
