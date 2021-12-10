import React, { useState } from "react";
import CoinModal from "./CoinModal";
import "../styles/CoinList.css";

const CoinList = (props) => {
    const {
        image,
        name,
        current_price,
        rank,
        symbol,
        high24h,
        low24h,
        price_change_24h,
        updated,
    } = props;

    const [isModalShowing, setIsModalShowing] = useState(false);

    const handleClick = () => {
        setIsModalShowing((prevState) => !prevState);
    };

    return (
        <div className="coinlist">
            <p>
                {symbol}: <span>{name}</span>
                <br />
                <span>Market Rank: {rank}</span>
            </p>
            <img src={image} alt="crypto logo" />
            <button onClick={handleClick}>Show Info </button>
            {isModalShowing && (
                <CoinModal
                    currentPrice={current_price}
                    high24h={high24h}
                    low24h={low24h}
                    priceChange={price_change_24h}
                />
            )}
        </div>
    );
};

export default CoinList;
