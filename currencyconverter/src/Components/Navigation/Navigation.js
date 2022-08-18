import React from "react";

import { NavLink } from "react-router-dom";
// import routes from "../../routes";

import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.navigationMenu}>
    <ul className={styles.navigationList}>
      <li className={styles.navigationListItem}>
        <NavLink
          to="/"
          className={styles.NavigationLink}
          activeClassName={styles.NavigationLinkActive}
          exact
        >
          Home
        </NavLink>
      </li>
      <li className={styles.navigationListItem}>
        <NavLink
          to="/converter"
          className={styles.NavigationLink}
          activeClassName={styles.NavigationLinkActive}
        >
          Converter
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;
