import "./App.css";
import Coinbase from "./components/coinbase";
import Kraken from "./components/kraken";

function App() {
  return (
    <div className="App">
      <h1>Crypto Prices</h1>
      <Coinbase />
      <Kraken />
    </div>
  );
}

export default App;
