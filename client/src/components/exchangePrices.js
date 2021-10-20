import BitcoinLogo from "../logos/bitcoin_logo.svg.png";
import EthereumLogo from "../logos/ethereum.png";
const ExchangePrices = ({ buyBtc, sellBtc, buyEth, sellEth }) => {
  return (
    <div className="exchange-prices">
      <img src={BitcoinLogo} alt="Bitcoin Logo" />
      <p>Buy price: ${buyBtc}</p>
      <p>Sell price: ${sellBtc}</p>
      <img src={EthereumLogo} alt="Ethereum Logo" />
      <p>Buy Price: ${buyEth}</p>
      <p>Sell Price: ${sellEth}</p>
    </div>
  );
};

export default ExchangePrices;
