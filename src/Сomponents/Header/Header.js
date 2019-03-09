import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import Menu from "../../assets/burger.svg";

export const Header = () => (
  <header className={styles.header}>
    <h1>
      <Link to="/">Duchamp it</Link>
    </h1>

    <img src={Menu} />
  </header>
);
