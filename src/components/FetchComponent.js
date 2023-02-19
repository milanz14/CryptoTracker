import { useState, useEffect } from "react";

import axios from "axios";

import Coin from "./Coin";
import SearchFilter from "./SearchFilter";
import Spinner from "./Spinner";

import "../styles/FetchComponent.css";

const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
// const BASE_URL = 'https://api.coingecko.com/api/v3/'

// TODO: add a form which allows us to manipulate the data input in the URL --> make every parameter a dynamic value;

const FetchComponent = () => {
  const INITIAL_STATE = [];
  const [coins, setCoins] = useState(INITIAL_STATE);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(BASE_URL);
      sessionStorage.setItem("coins", JSON.stringify(res.data));
      setCoins(res.data);
      setIsDataLoaded(true);
    };
    fetchData();
  }, []);

  const filterCoins = (searchTerm) => {
    const coinData = sessionStorage.getItem("coins");
    const coinDataJson = JSON.parse(coinData);
    setCoins(() =>
      coinDataJson.filter(
        (coin) =>
          coin.name.toLowerCase().includes(searchTerm) ||
          coin.symbol.toLowerCase().includes(searchTerm)
      )
    );
  };

  return (
    <div className="fetchComponent">
      <h2>CryptoTracker</h2>
      <h4 className="text">Info on Crypto!</h4>
      <div>{!coins && <h2>No Coins Found </h2>}</div>
      <SearchFilter filterCoins={filterCoins} />
      {!isDataLoaded && <Spinner />}
      <div className="list-container">
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              <Coin
                id={coin.id}
                name={coin.name}
                image={coin.image}
                current_price={coin.current_price}
                rank={coin.market_cap_rank}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FetchComponent;
