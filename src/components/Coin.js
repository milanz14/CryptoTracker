import "../styles/Coin.css";
import CoinModal from "./CoinModal";

import { useState } from "react";

const Coin = (props) => {
  const {
    id,
    image,
    name,
    current_price,
    rank,
    symbol,
    high24h,
    low24h,
    price_change_24h,
  } = props;

  const [isModalShowing, setIsModalShowing] = useState(false);

  const handleCoinModal = () => {
    console.log(id);
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
      {isModalShowing && (
        <CoinModal setIsModalShowing={setIsModalShowing} id={id} />
      )}
    </div>
  );
};

export default Coin;
