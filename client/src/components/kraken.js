const Kraken = ({ buyBtc, sellBtc, buyEth, sellEth }) => {
  return (
    <div className="kraken">
      <h2>Kraken</h2>
      <div>
        <p>Bitcoin buy price: ${buyBtc}</p>
        <p>Bitcoin sell price: ${sellBtc}</p>
        <p>Ethereum buy price: ${buyEth}</p>
        <p>Ethereum sell price: ${sellEth}</p>
      </div>
    </div>
  );
};

export default Kraken;
