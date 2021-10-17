import "./App.css";
import coinbaseAPI from "./api/coinbaseAPI";
//import krakenAPI from "./api/krakenAPI";
import { useState, useEffect } from "react";

function App() {
  const [coinbase, setCoinbase] = useState([]);

  useEffect(() => {
    coinbaseAPI.getBuyBtc().then((price) => {
      console.log(price, typeof price);
      setCoinbase(coinbase.concat(price));
    });
  }, []);

  console.log(coinbase);

  return (
    <div className="App">
      <h1>Crypto Prices</h1>
      <h4>Coinbase:</h4>
      <p>Bitcoin buy price: ${coinbase[coinbase.length - 1]}</p>
    </div>
  );
}

export default App;
