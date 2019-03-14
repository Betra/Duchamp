import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <Link to="/">Берроуз</Link>
  </header>
);
