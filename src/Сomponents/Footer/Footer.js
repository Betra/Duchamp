import React from 'react';
import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';

export function Footer() {
  return(
    <footer className={styles.footer}>
      <Link to='/about'>About</Link>
      <Link  to='/beginner'>What's Cut Up?</Link>
      <Link  to='/github'>Open Source</Link>
    </footer>
  );
}