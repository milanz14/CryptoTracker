import React from "react";
import "../styles/CoinList.css";

const CoinList = (props) => {
    const { image, name, current_price, rank, symbol, high24h, low24h } = props;

    return (
        <div className="coinlist">
            <p>
                {symbol}: <span>{name}</span>
                <br />
                <span>Market Cap Rank: {rank}</span>
            </p>
            <img src={image} alt="crypto logo" />
            <span>{current_price}</span>
        </div>
    );
};

export default CoinList;
