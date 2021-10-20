const Prices = ({ buy, sell }) => {
  return (
    <div className="prices">
      <p>Buy Price: ${buy}</p>
      <p>Sell Price: ${sell}</p>
    </div>
  );
};

export default Prices;
