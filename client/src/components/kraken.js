import krakenAPI from "../api/krakenAPI";
import { useState, useEffect } from "react";

const Kraken = () => {
  const [buyBtc, setBuyBtc] = useState();
  const [sellBtc, setSellBtc] = useState();
  const [buyEth, setBuyEth] = useState();
  const [sellEth, setSellEth] = useState();

  useEffect(() => {
    krakenAPI.getBuyBtc().then((price) => {
      setBuyBtc(price);
    });
    krakenAPI.getSellBtc().then((price) => {
      setSellBtc(price);
    });
    krakenAPI.getBuyEth().then((price) => {
      setBuyEth(price);
    });
    krakenAPI.getSellEth().then((price) => {
      setSellEth(price);
    });
  }, []);

  return (
    <div className="kraken">
      <h2>Kraken</h2>
      <div>
        <p>Bitcoin buy price: ${buyBtc}</p>
        <p>Bitcoin sell price: ${sellBtc}</p>
        <p>Ethereum buy price: ${buyEth}</p>
        <p>Ethereum sell price: ${sellEth}</p>
      </div>
    </div>
  );
};

export default Kraken;
