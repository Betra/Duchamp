import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { MenuOption } from "../MenuOption";
import { clearCutups } from "../../actions";
import styles from "./Menu.module.css";

export let Menu = ({ dispatch, animation }) => {
  let url = document.location;

  let ani;

  if (!animation)
    ani = { transform: "translate3d(-100vw, 0, 0)", display: "hidden" };
  else ani = { transform: "translate3d(0vw, 0, 0)" };
  // if (!animation) ani = "neAni";
  // else ani = "Ani";

  return (
    <aside style={ani} id="menu" className={styles.choices}>
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

const mapStateToProps = state => ({
  animation: state.animation
});

Menu = connect(mapStateToProps)(Menu);
