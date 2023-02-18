import "../styles/Coin.css";

const Coin = (props) => {
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
    <>
      <div className="img-div">
        <img src={image} alt="crypto logo" />
      </div>
      <div>
        {symbol}: <span>{name}</span>
        <br />
        <span>Market Rank: {rank}</span>
      </div>
      <div>
        <span>Curent Price: {current_price}</span>
      </div>
    </>
  );
};

export default Coin;
