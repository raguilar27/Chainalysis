const express = require("express");
const router = express.Router();
const Client = require("coinbase").Client;
require("dotenv").config();

const client = new Client({
  apiKey: process.env.COINBASE_APIKEY,
  apiSecret: process.env.COINBASE_APISECRET,
  strictSSL: false,
});

router.get("/btc/buy", (req, res) => {
  client.getBuyPrice({ currencyPair: "BTC-USD" }, (err, price) => {
    res.json(price);
  });
});

router.get("/btc/sell", (req, res) => {
  client.getSellPrice({ currencyPair: "BTC-USD" }, (err, price) => {
    res.json(price);
  });
});

router.get("/eth/buy", (req, res) => {
  client.getBuyPrice({ currencyPair: "ETH-USD" }, (err, price) => {
    res.json(price);
  });
});

router.get("/eth/sell", (req, res) => {
  client.getSellPrice({ currencyPair: "ETH-USD" }, (err, price) => {
    res.json(price);
  });
});

module.exports = router;
