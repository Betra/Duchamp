import React from "react";
import { Link } from "react-router-dom";

import { Section } from "../Section";
import styles from "./Menu.module.css";

import { addCutup } from "../../actions";
import { store } from "../../store";

export const Menu = props => {
  let url = document.location;

  return (
    <main className={styles.choices}>
      <Link to="/">
        <Section
          // Clear state onClick={alert
          heading="Вставить свой текст"
          isActive={url.pathname === "/"}
        />
      </Link>

      <Link to="/wiki">
        <Section
          // Clear wiki page onClick
          onClick={() => store.dispatch(addCutup("Wiki"))}
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
