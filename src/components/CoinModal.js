import React from "react";
import "../styles/CoinModal.css";

const CoinModal = (props) => {
    const { currentPrice, high24h, low24h, priceChange } = props;

    return (
        <div className="modalWrapper">
            <div classname="coinModal">
                <span>
                    <p>{currentPrice}</p>
                    <p>Last 24h: {priceChange}</p>
                    <p>{high24h}</p>
                    <p>{low24h}</p>
                </span>
            </div>
        </div>
    );
};

export default CoinModal;
