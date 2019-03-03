import React from 'react';
import styles from "./Header.module.css";

import { Link } from 'react-router-dom';

export const Header = () => (
  <header className={styles.header}>
    <h1>
      <Link to="/">
        Duchamp it
      </Link>
    </h1> 
  </header>
);