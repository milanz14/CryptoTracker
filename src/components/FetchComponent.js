import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinList from "./CoinList";
const BASE_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
// const BASE_URL = 'https://api.coingecko.com/api/v3/'

// TODO: add a form which allows us to manipulate the data input in the URL --> make every parameter a dynamic value;

const FetchComponent = () => {
    const INITIAL_STATE = [];
    const [data, setData] = useState(INITIAL_STATE);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(BASE_URL);
            console.log(res.data[0]);
            sessionStorage.setItem("coins", JSON.stringify(res.data));
            setData(res.data);
        };
        fetchData();
    }, []);

    const checkWhatItHas = () => {
        console.log(data);
    };

    return (
        <div className="fetchComponent">
            <ul>
                {data.map((coin) => {
                    return (
                        <li key={coin.id}>
                            <CoinList
                                id={coin.id}
                                name={coin.name}
                                image={coin.image}
                            />
                        </li>
                    );
                })}
                ;
            </ul>
        </div>
    );
};

export default FetchComponent;
