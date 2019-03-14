import React from "react";

import { getRandomPlaceholder } from "../../utils";

import styles from "./text.module.css";

export const Text = props => {
  let handleInput = event => props.onTextChange(event.target.value);
  return (
    <textarea
      autoFocus
      className={styles.inputArea}
      value={props.text}
      onChange={handleInput}
      placeholder={getRandomPlaceholder()}
    />
  );
};
