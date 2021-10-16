const express = require("express");
const coinbase = require("./modules/coinbase");
const kraken = require("./modules/kraken");
require("dotenv").config();
const app = express();

// Route to kraken api
app.use("/kraken", kraken);
// Route to coinbase api
app.use("/coinbase", coinbase);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
