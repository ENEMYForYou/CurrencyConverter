import React, { useEffect, useState } from "react";
import styles from "./CurrentRate.module.css";

const baseUrl = "http://api.exchangeratesapi.io/v1/latest";
const apiKey = "878e97751954aa0f0a4a518e61f47eec";

export default function CurrentRate() {
  const [usdRate, setUsdRate] = useState();
  const [eurRate, setEurRate] = useState();

  useEffect(() => {
    fetch(`${baseUrl}?access_key=${apiKey}&base=EUR&symbols=UAH`)
      .then((res) => res.json())
      .then((data) => {
        setEurRate(data.rates.UAH.toFixed(4));
        setUsdRate(data.rates.UAH.toFixed(4));
      });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.ratesBlock}>
        Actual rate UAH to:
        <ul className={styles.ratesList}>
          <li className={styles.ratesListItem}>
            USD - <span className={styles.rate}>{usdRate}</span>
          </li>
          <li className={styles.ratesListItem}>
            EUR - <span className={styles.rate}>{eurRate}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
