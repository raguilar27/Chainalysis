// Backend Server File
const express = require("express");
const coinbase = require("./routes/coinbase");
const kraken = require("./routes/kraken");
require("dotenv").config();
const app = express();

// CORS HEADERS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // if it's not set to all domains, update '*' to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// Route to kraken api
app.use("/kraken", kraken);
// Route to coinbase api
app.use("/coinbase", coinbase);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
