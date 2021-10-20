import coinbaseLogo from "../logos/Coinbase.svg.png";
import krakenLogo from "../logos/krakenlogo.png";

const ExchangeLogos = () => {
  return (
    <div className="exchanges">
      <div className="exchange">
        <img src={coinbaseLogo} alt="Coinbase Logo" />
      </div>
      <div className="exchange">
        <img src={krakenLogo} alt="Kraken Logo" />
      </div>
    </div>
  );
};

export default ExchangeLogos;
