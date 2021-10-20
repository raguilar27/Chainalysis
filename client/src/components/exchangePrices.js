import BitcoinLogo from "../logos/bitcoin_logo.svg.png";
import EthereumLogo from "../logos/ethereum.png";
import Prices from "./prices";

const ExchangePrices = ({ buyBtc, sellBtc, buyEth, sellEth }) => {
  return (
    <div className="exchange-prices">
      <img src={BitcoinLogo} alt="Bitcoin Logo" />
      <Prices buy={buyBtc} sell={sellBtc} />
      <img src={EthereumLogo} alt="Ethereum Logo" />
      <Prices buy={buyEth} sell={sellEth} />
    </div>
  );
};

export default ExchangePrices;
