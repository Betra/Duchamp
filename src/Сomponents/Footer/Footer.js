import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <Link to="/about">About</Link>

    <Link to="/beginner">What's Cut Up?</Link>

    <a
      href="https://github.com/Betra/duchamp-it-up"
      target="_blank"
      rel="noopener noreferrer"
    >
      Open Source
    </a>
  </footer>
);
