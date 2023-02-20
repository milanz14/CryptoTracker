import { useState } from "react";

import axios from "axios";

import CoinModal from "./CoinModal";

import "../styles/Coin.css";

const Coin = (props) => {
  const { id, image, name, current_price, rank, symbol } = props;

  const [isModalShowing, setIsModalShowing] = useState(false);
  const [priceData, setPriceData] = useState([]);

  const handleCoinModal = async () => {
    const res = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=USD&days=30`
    );
    setPriceData(res.data.prices);
    setIsModalShowing((prev) => !prev);
  };

  return (
    <div className="coin">
      <div className="img-div">
        <img src={image} alt="crypto logo" />
      </div>
      <div>
        {symbol}: <span>{name}</span>
        <br />
        <span>Market Rank: {rank}</span>
      </div>
      <div className="info-container">
        <div>{current_price.toFixed(2)} USD</div>
        <div className="btn-container">
          <button onClick={handleCoinModal}>More</button>
        </div>
      </div>
      {isModalShowing && priceData && (
        <CoinModal
          setIsModalShowing={setIsModalShowing}
          priceData={priceData}
        />
      )}
    </div>
  );
};

export default Coin;
