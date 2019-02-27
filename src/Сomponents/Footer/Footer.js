import React from 'react';
import styles from "./Footer.module.css";

export function Footer() {

  return(
    <footer className={styles.footer}>
      <span>About</span>
      <span>What's Cut Up?</span>
      <span>Open Source</span>
    </footer>
  );
}