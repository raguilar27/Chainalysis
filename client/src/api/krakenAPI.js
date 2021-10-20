import axios from "axios";

const getBuyBtc = () => {
  const request = axios.get("/kraken/buy-btc");
  return request.then((res) => res.data);
};

const getSellBtc = () => {
  const request = axios.get("/kraken/sell-btc");
  return request.then((res) => res.data);
};

const getBuyEth = () => {
  const request = axios.get("/kraken/buy-eth");
  return request.then((res) => res.data);
};

const getSellEth = () => {
  const request = axios.get("/kraken/sell-eth");
  return request.then((res) => res.data);
};

const krakenAPI = {
  getBuyBtc,
  getSellBtc,
  getBuyEth,
  getSellEth,
};

export default krakenAPI;
