import React from "react";

const CoinList = (props) => {
    const { image, name } = props;
    return (
        <div>
            <p>{name}</p>
            <img src={image} />
        </div>
    );
};

export default CoinList;
