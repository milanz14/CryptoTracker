import { useState } from "react";

import "../styles/CoinModal.css";

import Spinner from "./Spinner";
import ChartComponent from "./ChartComponent";

const CoinModal = (props) => {
  const { id, name, setIsModalShowing } = props;

  const [coinPrices, setCoinPrices] = useState(null);

  return (
    <>
      <div className="modal-container">
        {/* <ChartComponent priceData={coinPrices} /> */}
        <button
          className="title-close-btn"
          onClick={() => setIsModalShowing((prev) => !prev)}>
          &times;
        </button>
        <div className="modal-title">
          <h1>{name}</h1>
        </div>
        <div className="modal-body">lorem80</div>
      </div>
      <div className="modal-overlay"></div>
    </>
  );
};

export default CoinModal;
