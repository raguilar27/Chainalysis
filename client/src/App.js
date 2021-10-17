import "./App.css";
import coinbaseAPI from "./api/coinbaseAPI";
//import krakenAPI from "./api/krakenAPI";
import { useState, useEffect } from "react";

function App() {
  const [coinbase, setCoinbase] = useState([]);

  useEffect(() => {
    coinbaseAPI.getBuyBtc().then((price) => {
      console.log(price);
      setCoinbase(coinbase.concat({ BuyBtc: price }));
    });
  }, []);

  return (
    <div className="App">
      <h4>Crypto Prices</h4>
      <h6>Coinbase:</h6>
      <p>Bitcoin buy price: ${coinbase.BuyBtc}</p>
    </div>
  );
}

export default App;
