import "./App.css";
// Components
import ExchangeLogos from "./components/exchangeLogos";
import ExchangePrices from "./components/exchangePrices";
import CryptoLogo from "./components/cryptoLogo";
import Recommend from "./components/recommend";
import BitcoinLogo from "./logos/bitcoin_logo.svg.png";
import EthereumLogo from "./logos/ethereum.png";
// APIs
import coinbaseAPI from "./api/coinbaseAPI";
import krakenAPI from "./api/krakenAPI";
import { useState, useEffect } from "react";

function App() {
  // Coinbase Prices
  const [cbuyBtc, setCBuyBtc] = useState();
  const [csellBtc, setCSellBtc] = useState();
  const [cbuyEth, setCBuyEth] = useState();
  const [csellEth, setCSellEth] = useState();
  // Kraken Prices
  const [kbuyBtc, setKBuyBtc] = useState();
  const [ksellBtc, setKSellBtc] = useState();
  const [kbuyEth, setKBuyEth] = useState();
  const [ksellEth, setKSellEth] = useState();

  useEffect(() => {
    // Coinbase Api calls
    coinbaseAPI.getBuyBtc().then((price) => {
      setCBuyBtc(Number(price).toFixed(2));
    });
    coinbaseAPI.getSellBtc().then((price) => {
      setCSellBtc(Number(price).toFixed(2));
    });
    coinbaseAPI.getBuyEth().then((price) => {
      setCBuyEth(Number(price).toFixed(2));
    });
    coinbaseAPI.getSellEth().then((price) => {
      setCSellEth(Number(price).toFixed(2));
    });
    // Kraken Api calls
    krakenAPI.getBuyBtc().then((price) => {
      setKBuyBtc(Number(price).toFixed(2));
    });
    krakenAPI.getSellBtc().then((price) => {
      setKSellBtc(Number(price).toFixed(2));
    });
    krakenAPI.getBuyEth().then((price) => {
      setKBuyEth(Number(price).toFixed(2));
    });
    krakenAPI.getSellEth().then((price) => {
      setKSellEth(Number(price).toFixed(2));
    });
  }, []);

  const buyBtc = cbuyBtc < kbuyBtc ? cbuyBtc + "coinbase" : kbuyBtc + "kraken";
  const sellBtc =
    csellBtc < ksellBtc ? ksellBtc + "kraken" : csellBtc + "coinbase";
  const buyEth = cbuyEth < kbuyEth ? cbuyEth + "coinbase" : kbuyEth + "kraken";
  const sellEth =
    csellEth < ksellEth ? ksellEth + "kraken" : csellEth + "coinbase";

  return (
    <div className="App">
      <ExchangeLogos />
      <CryptoLogo cryptoLogo={BitcoinLogo} />
      <ExchangePrices
        cbuy={cbuyBtc}
        csell={csellBtc}
        kbuy={kbuyBtc}
        ksell={ksellBtc}
      />
      <CryptoLogo cryptoLogo={EthereumLogo} />
      <ExchangePrices
        cbuy={cbuyEth}
        csell={csellEth}
        kbuy={kbuyEth}
        ksell={ksellEth}
      />
      <Recommend
        buyBtc={buyBtc}
        buyEth={buyEth}
        sellBtc={sellBtc}
        sellEth={sellEth}
      />
    </div>
  );
}

export default App;
