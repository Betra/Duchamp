import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { MenuOption } from "../MenuOption";
import { clearCutups } from "../../actions";
import styles from "./Menu.module.css";

export let Menu = ({ dispatch }) => {
  let url = document.location;

  return (
    <aside id="menu" className={styles.choices}>
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
          onClick={() => dispatch(clearCutups())}
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

      <Link to="/guardian">
        <MenuOption
          heading="Гардиан"
          description="случайная новость"
          onClick={() => dispatch(clearCutups())}
          isActive={url.pathname === "/guardian"}
        />
      </Link>
    </aside>
  );
};

Menu = connect()(Menu);
