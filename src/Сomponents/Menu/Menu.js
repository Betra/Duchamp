import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { MenuOption } from "../MenuOption";
import { clearCutups, addArticle } from "../../actions";

import styles from "./Menu.module.css";

export let Menu = ({ dispatch }) => {
  let url = document.location;

  return (
    <main className={styles.choices}>
      <Link to="/">
        <MenuOption
          heading="Вставить свой текст"
          onClick={() => dispatch(clearCutups())}
          isActive={url.pathname === "/"}
        />
      </Link>

      <Link to="/wiki">
        <MenuOption
          heading="Википедия"
          description="случайная статья"
          onClick={() => {
            dispatch(clearCutups());
            dispatch(addArticle());
          }}
          isActive={url.pathname === "/wiki"}
        />
      </Link>

      <Link to="/meduza">
        <MenuOption
          heading="Медуза"
          description="случайная новость"
          onClick={() => dispatch(clearCutups())}
          isActive={url.pathname === "/meduza"}
        />
      </Link>

      <Link to="/nyt">
        <MenuOption
          heading="Нью-Йорк Таймс"
          description="случайная новость"
          onClick={() => dispatch(clearCutups())}
          isActive={url.pathname === "/nyt"}
        />
      </Link>
    </main>
  );
};

Menu = connect()(Menu);
