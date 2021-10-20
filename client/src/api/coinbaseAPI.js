import axios from "axios";

const getBuyBtc = () => {
  const request = axios.get("/coinbase/buy-btc");
  return request.then((res) => res.data);
};

const getSellBtc = () => {
  const request = axios.get("/coinbase/sell-btc");
  return request.then((res) => res.data);
};

const getBuyEth = () => {
  const request = axios.get("/coinbase/buy-eth");
  return request.then((res) => res.data);
};

const getSellEth = () => {
  const request = axios.get("/coinbase/sell-eth");
  return request.then((res) => res.data);
};

const coinbaseAPI = {
  getBuyBtc,
  getSellBtc,
  getBuyEth,
  getSellEth,
};

export default coinbaseAPI;
