import React, { useState } from "react";
import "../styles/CoinList.css";

const CoinList = (props) => {
    const { image, name, current_price, rank, symbol, high24h, low24h } = props;

    const [isModalShowing, setIsModalShowing] = useState(false);

    const handleClick = () => {
        setIsModalShowing(!isModalShowing);
    };

    return (
        <div className="coinlist">
            <p>
                {symbol}: <span>{name}</span>
                <br />
                <span>Market Rank: {rank}</span>
            </p>
            <img src={image} alt="crypto logo" />
            <button onClick={handleClick}>Info</button>
        </div>
    );
};

export default CoinList;
