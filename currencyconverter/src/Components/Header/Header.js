import React from "react";

import styles from "./Header.module.css";

import Navigation from "../Navigation/Navigation";
import CurrentRate from "../CurrentRate/CurrentRate";

const Header = () => (
  <header className={styles.headerBar}>
    <Navigation />
    <CurrentRate />
  </header>
);

export default Header;
