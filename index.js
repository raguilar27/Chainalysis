const express = require("express");
const coinbase = require("./modules/coinbase");
const app = express();

app.use("/api", coinbase);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
