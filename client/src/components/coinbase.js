import coinbaseAPI from "../api/coinbaseAPI";
import { useState, useEffect } from "react";

const Coinbase = () => {
  const [buyBtc, setBuyBtc] = useState();
  const [sellBtc, setSellBtc] = useState();
  const [buyEth, setBuyEth] = useState();
  const [sellEth, setSellEth] = useState();

  useEffect(() => {
    coinbaseAPI.getBuyBtc().then((price) => {
      setBuyBtc(price);
    });
    coinbaseAPI.getSellBtc().then((price) => {
      setSellBtc(price);
    });
    coinbaseAPI.getBuyEth().then((price) => {
      setBuyEth(price);
    });
    coinbaseAPI.getSellEth().then((price) => {
      setSellEth(price);
    });
  }, []);

  return (
    <div className="coinbase">
      <h2>Coinbase:</h2>
      <div>
        <p>Bitcoin buy price: ${buyBtc}</p>
        <p>Bitcoin sell price: ${sellBtc}</p>
        <p>Ethereum buy price: ${buyEth}</p>
        <p>Ethereum sell price: ${sellEth}</p>
      </div>
    </div>
  );
};

export default Coinbase;
