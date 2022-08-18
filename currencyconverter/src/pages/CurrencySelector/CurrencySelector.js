import React from "react";
import { v4 as uuidv4 } from "uuid";

import styles from "./CurrencySelector.module.css";

export default function CurrencySelector(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    amount,
    onChangeAmount,
  } = props;

  return (
    <div>
      <input
        type="number"
        className={styles.SelectorInput}
        value={amount || []}
        onChange={onChangeAmount}
      />
      <select
        className={styles.SelectorSelect}
        value={selectedCurrency || []}
        onChange={onChangeCurrency}
      >
        {currencyOptions.map((currencyOption) => (
          <option key={uuidv4()} value={currencyOption}>
            {currencyOption}
          </option>
        ))}
      </select>
    </div>
  );
}
