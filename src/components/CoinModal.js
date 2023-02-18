import React from "react";
import "../styles/CoinModal.css";

const CoinModal = (props) => {
  const { currentPrice, high24h, low24h, priceChange, name, image, showModal } =
    props;

  return (
    <div className="coinModal">
      {/* <div className="modalContainer">
        <button className="titleCloseBtn" onClick={() => showModal(false)}>
          X
        </button>
        <div clasName="modalTitle">
          <h1>{name}</h1>
        </div>
        <div clasName="modalBody">
          <img src={image} />
          <p>{currentPrice}</p>
          <p>{high24h}</p>
          <p>{low24h}</p>
          <p>{priceChange}</p>
        </div>
        <div clasName="modalFooter">
          <button onClick={() => showModal(false)}>Close</button>
        </div>
      </div> */}
    </div>
  );
};

export default CoinModal;
