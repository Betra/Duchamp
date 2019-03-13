import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.info}>
      Онлайн инструмент для нарезки текстов с помощью техники «
      <Link to="/about">cut-up</Link>»
    </span>

    <section className={styles.devs}>
      <span>
        Разработка:{" "}
        <a
          href="https://github.com/Betra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Иван Дорофеев
        </a>
      </span>
      {"    "}
      <span>
        Дизайн:{" "}
        <a
          href="https://github.com/yuraist"
          target="_blank"
          rel="noopener noreferrer"
        >
          Юра Истомин
        </a>
      </span>
    </section>
  </footer>
);
