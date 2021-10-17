import axios from "axios";
const baseURL = "http://localhost:3001/coinbase";

const getBuyBtc = () => {
  const request = axios.get(`${baseURL}/buy-btc}`);
  return request.then((res) => res.data);
};

const getSellBtc = () => {
  const request = axios.get(`${baseURL}/sell-btc}`);
  return request.then((res) => res.data);
};

const getButEth = () => {
  const request = axios.get(`${baseURL}/buy-eth`);
  return request.then((res) => res.data);
};

const getSellEth = () => {
  const request = axios.get(`${baseURL}/sell-eth`);
  return request.then((res) => res.data);
};

export default { getBuyBtc, getSellBtc, getButEth, getSellEth };
