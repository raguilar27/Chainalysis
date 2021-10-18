const Coinbase = ({ buyBtc, sellBtc, buyEth, sellEth }) => {
  return (
    <div className="coinbase">
      <h2>Coinbase:</h2>
      <div>
        <p>Bitcoin buy price: ${buyBtc}</p>
        <p>Bitcoin sell price: ${sellBtc}</p>
        <p>Ethereum buy price: ${buyEth}</p>
        <p>Ethereum sell price: ${sellEth}</p>
      </div>
    </div>
  );
};

export default Coinbase;
