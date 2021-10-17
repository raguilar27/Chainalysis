const express = require("express");
const axios = require("axios");
const router = express.Router();

const getData = async (currencyPair) => {
  try {
    const response = await axios.get(
      `https://api.kraken.com/0/public/Ticker?pair=${currencyPair}`
    );
    // returns an object with different types of prices of the currencyPair
    return response.data.result;
  } catch (err) {
    return err;
  }
};
const btcPair = "BTCUSD";
router.get("/buy-btc", async (req, res) => {
  const price = await getData(btcPair);
  // XXBTZUSD.b[0] contains the buy price of bitcoin
  res.json(price.XXBTZUSD.b[0]);
});
router.get("/sell-btc", async (req, res) => {
  const price = await getData(btcPair);
  // XXBTZUSD.a[0] contains the sell price of bitcoin
  res.json(price.XXBTZUSD.a[0]);
});

const ethPair = "ETHUSD";
router.get("/buy-eth", async (req, res) => {
  const price = await getData(ethPair);
  // XETHZUSD.b[0] contains the buy price of ethereum
  res.json(price.XETHZUSD.b[0]);
});
router.get("/sell-eth", async (req, res) => {
  const price = await getData(ethPair);
  // XETHZUSD.a[0] contains the sell price of ethereum
  res.json(price.XETHZUSD.a[0]);
});

module.exports = router;
