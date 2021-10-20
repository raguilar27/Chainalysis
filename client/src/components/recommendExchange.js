import coinbaseLogo from "../logos/Coinbase.svg.png";
import krakenLogo from "../logos/krakenlogo.png";

const RecommendExchange = ({ buy, sell }) => {
  return (
    <div className="recommend-exchange">
      <div className="new">
        {buy.includes("kraken") ? (
          <p>
            Best Buy Price At <img src={krakenLogo} alt="Kraken Logo" />
          </p>
        ) : (
          <p>
            Best Buy Price At <img src={coinbaseLogo} alt="Coinbase Logo" />
          </p>
        )}
        {sell.includes("kraken") ? (
          <p>
            Best Sell Price At <img src={krakenLogo} alt="Kraken Logo" />
          </p>
        ) : (
          <p>
            Best Sell Price At <img src={coinbaseLogo} alt="Coinbase Logo" />
          </p>
        )}
      </div>
    </div>
  );
};

export default RecommendExchange;
