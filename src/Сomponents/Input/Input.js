import React from "react";
import { connect } from "react-redux";

import styles from "./Input.module.css";
import { updateText } from "../../actions";

export let Input = ({ dispatch, placeholder }) => (
  <textarea
    className={styles.inputArea}
    onChange={e => dispatch(updateText(e.target.value))}
    placeholder={placeholder}
  />
);

Input = connect()(Input);
