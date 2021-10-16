const express = require("express");
const axios = require("axios");
const router = express.Router();

const buy = async (currencyPair) => {
  try {
    const response = await axios.get(
      `https://api.coinbase.com/v2/prices/${currencyPair}/buy`
    );
    return response.data.data.amount;
  } catch (err) {
    return err;
  }
};
const sell = async (currencyPair) => {
  try {
    const response = await axios.get(
      `https://api.coinbase.com/v2/prices/${currencyPair}/sell`
    );
    return response.data.data.amount;
  } catch (err) {
    return err;
  }
};

const btcPair = "BTC-USD";
router.get("/buy-btc", async (req, res) => {
  const price = await buy(btcPair);
  res.json(price);
});
router.get("/sell-btc", async (req, res) => {
  const price = await sell(btcPair);
  res.json(price);
});

const ethPair = "ETH-USD";
router.get("/buy-eth", async (req, res) => {
  const price = await buy(ethPair);
  res.json(price);
});
router.get("/sell-eth", async (req, res) => {
  const price = await sell(ethPair);
  res.json(price);
});

module.exports = router;
