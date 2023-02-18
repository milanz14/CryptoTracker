import React from "react";
import "../styles/SearchFilter.css";
import { Input } from "@chakra-ui/react";

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
