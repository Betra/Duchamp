import React from "react";
import styles from "./Description.module.css";

import { connect } from "react-redux";

export let Description = ({ dispatch }) => (
  <section
    className={styles.description}
    onClick={() => dispatch({ type: "SWITCH_MENU" })}
  >
    Нарежь текст онлайн
  </section>
);

Description = connect()(Description);
