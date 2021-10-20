import BitcoinLogo from "../logos/bitcoin_logo.svg.png";
import EthereumLogo from "../logos/ethereum.png";
import coinbaseLogo from "../logos/Coinbase.svg.png";
import krakenLogo from "../logos/krakenlogo.png";

const Recommend = ({ buyBtc, buyEth, sellEth, sellBtc }) => {
  return (
    <div className="recommend">
      <h2>Recommended Exchange</h2>
      <div className="recommendation">
        <div className="recommend-crypto">
          <img src={BitcoinLogo} alt="Crypto logo" />
          <div className="recommend-exchange">
            <div className="new">
              {buyBtc.includes("kraken") ? (
                <p>
                  Best Buy Price: <img src={krakenLogo} alt="Kraken Logo" />
                </p>
              ) : (
                <p>
                  Best Buy Price: <img src={coinbaseLogo} alt="Coinbase Logo" />
                </p>
              )}
              {sellBtc.includes("kraken") ? (
                <p>
                  Best Sell Price: <img src={krakenLogo} alt="Kraken Logo" />
                </p>
              ) : (
                <p>
                  Best Sell Price:{" "}
                  <img src={coinbaseLogo} alt="Coinbase Logo" />
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="recommend-crypto">
          <img src={EthereumLogo} alt="Crypto logo" />
          <div className="recommend-exchange">
            <div className="new">
              {buyEth.includes("kraken") ? (
                <p>
                  Best Buy Price: <img src={krakenLogo} alt="Kraken Logo" />
                </p>
              ) : (
                <p>
                  Best Buy Price: <img src={coinbaseLogo} alt="Coinbase Logo" />
                </p>
              )}
              {sellEth.includes("kraken") ? (
                <p>
                  Best Sell Price: <img src={krakenLogo} alt="Kraken Logo" />
                </p>
              ) : (
                <p>
                  Best Sell Price:{" "}
                  <img src={coinbaseLogo} alt="Coinbase Logo" />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
