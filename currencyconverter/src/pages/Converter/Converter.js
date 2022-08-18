import React, { useEffect, useState } from "react";

import styles from "./Converter.module.css";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

const baseUrl = "http://api.exchangeratesapi.io/v1/latest";
const apiKey = "878e97751954aa0f0a4a518e61f47eec";

export default function Converter() {
  const [currencyOptions, setCurrencyOption] = useState([]);
  const [fromCurrency, setFromCurrency] = useState([]);
  const [toCurrency, setToCurrency] = useState([]);
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountFromCurrency, setAmountFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(`${baseUrl}?access_key=${apiKey}`)
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOption([data.base, ...Object.keys(data.rates)]);
        setFromCurrency([data.base]);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency !== undefined && toCurrency !== null) {
      fetch(
        `${baseUrl}?access_key=${apiKey}&base=${fromCurrency}&symbols=${toCurrency}`
      )
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const handleChangeFromAmount = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(true);
  };
  const handleChangeToAmount = (e) => {
    setAmount(e.target.value);
    setAmountFromCurrency(false);
  };

  return (
    <div className={styles.ConverterContainer}>
      <h1 className={styles.ConverterTitle}>Converter</h1>
      <CurrencySelector
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        // onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeCurrency={(e) => setToCurrency(e.target.value)} //have troubles with API billing. can't change base currency without subscription
        amount={fromAmount}
        onChangeAmount={handleChangeFromAmount}
      />
      <div className={styles.ConverterEqual}>=</div>
      <CurrencySelector
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        amount={toAmount}
        onChangeAmount={handleChangeToAmount}
      />
    </div>
  );
}
