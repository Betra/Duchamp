import React from "react";
import { Link } from "react-router-dom";

import { Section } from "../Section";
import styles from "./Menu.module.css";

export const Menu = props => {
  let url = document.location;

  return (
    <main className={styles.choices}>
      <Link to="/">
        <Section
          heading="Вставить свой текст"
          isActive={url.pathname === "/"}
        />
      </Link>

      <Link to="/wiki">
        <Section
          heading="Википедия"
          description="случайная статья"
          isActive={url.pathname === "/wiki"}
        />
      </Link>

      <Link to="/meduza">
        <Section
          heading="Медуза"
          description="случайная новость"
          isActive={url.pathname === "/meduza"}
        />
      </Link>

      <Link to="/nyt">
        <Section
          heading="Нью-Йорк Таймс"
          description="случайная новость"
          isActive={url.pathname === "/nyt"}
        />
      </Link>
    </main>
  );
};
