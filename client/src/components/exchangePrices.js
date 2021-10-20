import BitcoinLogo from "../logos/bitcoin_logo.svg.png";
import EthereumLogo from "../logos/ethereum.png";
import Prices from "./prices";

const ExchangePrices = ({ cbuy, csell, kbuy, ksell }) => {
  return (
    <div className="exchanges">
      <Prices buy={cbuy} sell={csell} />
      <Prices buy={kbuy} sell={ksell} />
    </div>
  );
};

export default ExchangePrices;
