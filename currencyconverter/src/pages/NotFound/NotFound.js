import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

const NotFound = () => (
  <div className={styles.container}>
    <h1 className={styles.status}>404</h1>
    <p>
      You didn't break the internet, but we can't find what you are looking for.
      Here <Link to="/">link</Link> to home page.
    </p>
  </div>
);

export default NotFound;
