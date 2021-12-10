import React from "react";
import "../styles/SearchFilter.css";

const SearchFilter = (props) => {
    const { filterCoins } = props;

    const handleChange = (e) => {
        filterCoins(e.target.value);
    };
    return (
        <div className="searchfilter">
            <input
                type="text"
                onChange={handleChange}
                placeholder="Search Coins... "
            />
        </div>
    );
};

export default SearchFilter;
