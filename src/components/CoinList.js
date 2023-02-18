import "../styles/CoinList.css";

const CoinList = (props) => {
  const {
    image,
    name,
    current_price,
    rank,
    symbol,
    high24h,
    low24h,
    price_change_24h,
  } = props;

  return (
    <div className="coinlist">
      <div className="img-div">
        <img src={image} alt="crypto logo" />
      </div>
      <div>
        {symbol}: <span>{name}</span>
        <br />
        <span>Market Rank: {rank}</span>
      </div>
      <div className="secondP">
        <span>Curent Price: {current_price}</span>
        <br />
        <span>24h High: {high24h}</span>
        <br />
        <span>24h Low: {low24h}</span>
        <br />
        <span>24h Change: {price_change_24h}</span>
      </div>
    </div>
  );
};

export default CoinList;
