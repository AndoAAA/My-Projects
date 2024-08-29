import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Block from "./Block/Block";

function App() {
  const [rates, setRates] = useState({});
  const [currency1, setCurrency1] = useState("AMD");
  const [currency2, setCurrency2] = useState("USD");
  const [currency1Price, setCurrency1Price] = useState(1);
  const [currency2Price, setCurrency2Price] = useState(1);

  useEffect(() => {
    fetch("https://www.cbr-xml-daily.ru/daily_json.js")
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onChangePrice1 = (value) => {
    const price = value / rates[currency1];
    const result = price * rates[currency2];
    setCurrency2Price(result);
    setCurrency1Price(value);
  };

  const onChangePrice2 = (value) => {
    const result = (rates[currency1] / rates[currency2]) * value;
    setCurrency1(result);
    setCurrency2Price(value);
  };

  useEffect(() => {
    onChangePrice1(currency1Price);
  }, [currency1]);

  useEffect(() => {
    onChangePrice2(currency2Price);
  }, [currency2]);

  return (
    <>
      <div className="container">
        <Block
          value={0}
          currency={currency1}
          onChangeCurrency={setCurrency1}
          onChangeValue={onChangePrice1}
        />
        <Block
          value={0}
          currency={currency2}
          onChangeCurrency={setCurrency2}
          onChangeValue={onChangePrice2}
        />
      </div>
    </>
  );
}

export default App;
