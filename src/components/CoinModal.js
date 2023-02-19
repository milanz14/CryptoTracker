import { useState, useEffect } from "react";

import "../styles/CoinModal.css";

import axios from "axios";

import Spinner from "./Spinner";

const CoinModal = (props) => {
  const { id, name, setIsModalShowing } = props;

  const [coinPrices, setCoinPrices] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=USD&days=30&interval=daily`
      );
      // console.log(res.data.prices);
      setIsDataLoaded(true);
      return setCoinPrices(res.data.prices);
    };
    return fetchData();
  }, [id]);

  return (
    <div className="modalBackground">
      {!isDataLoaded && <Spinner />}
      <div className="modalContainer">
        <button
          className="titleCloseBtn"
          onClick={() => setIsModalShowing((prev) => !prev)}>
          X
        </button>
        <div className="modalTitle">
          <h1>{name}</h1>
        </div>
        <div className="modalBody">lorem80</div>
      </div>
    </div>
  );
};

export default CoinModal;
