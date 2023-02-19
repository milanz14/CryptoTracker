import React from "react";
import "../styles/CoinModal.css";

const CoinModal = (props) => {
  const {
    currentPrice,
    high24h,
    low24h,
    priceChange,
    name,
    image,
    setIsModalShowing,
  } = props;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button
          className="titleCloseBtn"
          onClick={() => setIsModalShowing((prev) => !prev)}>
          X
        </button>
        <div className="modalTitle">
          <h1>{name}</h1>
        </div>
        <div className="modalBody">
          {/* <img src={image} alt="coin symbol" />
          <p>{currentPrice}</p>
          <p>{high24h}</p>
          <p>{low24h}</p>
          <p>{priceChange}</p> */}
          <p>TEMP MODAL</p>
        </div>
        <div className="modalFooter">
          <button onClick={() => setIsModalShowing((prev) => !prev)}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoinModal;
