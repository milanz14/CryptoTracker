import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinList from "./CoinList";
import "../styles/FetchComponent.css";
import SearchFilter from "./SearchFilter";
import { UnorderedList, ListItem } from "@chakra-ui/react";
const BASE_URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
// const BASE_URL = 'https://api.coingecko.com/api/v3/'

// TODO: add a form which allows us to manipulate the data input in the URL --> make every parameter a dynamic value;

const FetchComponent = () => {
  const INITIAL_STATE = [];
  const [coins, setCoins] = useState(INITIAL_STATE);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(BASE_URL);
      // console.log(res.data[0]);
      sessionStorage.setItem("coins", JSON.stringify(res.data));
      setCoins(res.data);
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
      <div>{!coins && <h2>No Coins Found </h2>}</div>
      <SearchFilter filterCoins={filterCoins} />
      <div>
        <UnorderedList>
          {coins.map((coin) => {
            return (
              <ListItem key={coin.id}>
                <CoinList
                  id={coin.id}
                  name={coin.name}
                  symbol={coin.symbol}
                  image={coin.image}
                  current_price={coin.current_price}
                  rank={coin.market_cap_rank}
                  high24h={coin.high_24h}
                  low24h={coin.low_24h}
                  price_change_24h={coin.price_change_percentage_24h}
                  updated={coin.last_updated}
                />
              </ListItem>
            );
          })}
        </UnorderedList>
      </div>
    </div>
  );
};

export default FetchComponent;
