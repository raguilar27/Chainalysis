import "./App.css";
import Coinbase from "./components/coinbase";
import Kraken from "./components/kraken";
import Recommend from "./components/recommend";
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
      setCBuyBtc(Number(price));
    });
    coinbaseAPI.getSellBtc().then((price) => {
      setCSellBtc(Number(price));
    });
    coinbaseAPI.getBuyEth().then((price) => {
      setCBuyEth(Number(price));
    });
    coinbaseAPI.getSellEth().then((price) => {
      setCSellEth(Number(price));
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

  const buyBtc = cbuyBtc < kbuyBtc ? cbuyBtc : kbuyBtc;
  const sellBtc = csellBtc < ksellBtc ? ksellBtc : csellBtc;
  const buyEth = cbuyEth < kbuyEth ? cbuyEth : kbuyEth;
  const sellEth = csellEth < ksellEth ? ksellEth : csellEth;

  console.log("Buy BTC:", buyBtc);
  console.log("Sell BTC:", sellBtc);
  console.log("Buy ETH:", buyEth);
  console.log("Sell ETH:", sellEth);

  return (
    <div className="App">
      <h1>Crypto Prices</h1>
      <Coinbase
        buyBtc={cbuyBtc}
        buyEth={cbuyEth}
        sellBtc={csellBtc}
        sellEth={csellEth}
      />
      <Kraken
        buyBtc={kbuyBtc}
        buyEth={kbuyEth}
        sellBtc={ksellBtc}
        sellEth={ksellEth}
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
