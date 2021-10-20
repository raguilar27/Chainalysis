import BitcoinLogo from "../logos/bitcoin_logo.svg.png";
import EthereumLogo from "../logos/ethereum.png";
import RecommendExchange from "./recommendExchange";

const Recommend = ({ buyBtc, buyEth, sellBtc, sellEth }) => {
  return (
    <div>
      <h2>Recommended Exchange</h2>
      <div className="recommendation">
        <div className="recommend-crypto">
          <img src={BitcoinLogo} alt="Bitcoin logo" />
          <RecommendExchange buy={buyBtc} sell={sellBtc} />
        </div>
        <div className="recommend-crypto">
          <img src={EthereumLogo} alt="Ethereum logo" />
          <RecommendExchange buy={buyEth} sell={sellEth} />
        </div>
      </div>
    </div>
  );
};

export default Recommend;
