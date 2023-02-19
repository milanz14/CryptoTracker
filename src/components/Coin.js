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
    <div className="coin">
      <div className="img-div">
        <img src={image} alt="crypto logo" />
      </div>
      <div>
        {symbol}: <span>{name}</span>
        <br />
        <span>Market Rank: {rank}</span>
      </div>
      <div clasName="info-container">
        <div>{current_price.toFixed(2)} USD</div>
        <div className="btn-container">
          <button>More</button>
        </div>
      </div>
    </div>
  );
};

export default Coin;
