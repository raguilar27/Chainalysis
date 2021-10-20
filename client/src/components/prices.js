const Prices = ({ buy, sell }) => {
  return (
    <div className="exchange">
      <div className="exchanges-prices">
        <p>Buy Price: ${buy}</p>
        <p>Sell Price: ${sell}</p>
      </div>
    </div>
  );
};

export default Prices;
