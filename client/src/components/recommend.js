const Recommend = ({ buyBtc, buyEth, sellEth, sellBtc }) => {
  return (
    <div className="recommend">
      <h2>Recommended Exchange</h2>
      {buyBtc.includes("kraken") ? (
        <p>Best Bitcoin buy price: Kraken</p>
      ) : (
        <p>Best Bitcoin buy price: Coinbase</p>
      )}
      {sellBtc.includes("kraken") ? (
        <p>Best Bitcoin sell price: Kraken</p>
      ) : (
        <p>Best Bitcoin sell price: Coinbase</p>
      )}
      {buyEth.includes("kraken") ? (
        <p>Best Ethereum buy price: Kraken</p>
      ) : (
        <p>Best Ethereum buy price: Coinbase</p>
      )}
      {sellEth.includes("kraken") ? (
        <p>Best Ethereum sell price: Kraken</p>
      ) : (
        <p>Best Ethereum sell price: Coinbase</p>
      )}
    </div>
  );
};

export default Recommend;
