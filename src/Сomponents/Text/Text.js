import React from "react";

import styles from "./text.module.css";
import { getRandomPlaceholder } from "../../utils";

export const Text = props => {
  let handleInput = event => props.onTextChange(event.target.value);

  return (
    <textarea
      autoFocus
      className={styles.inputArea}
      value={props.text}
      onChange={handleInput}
      style={{ lineHeight: "1.6em" }}
      placeholder={getRandomPlaceholder()}
    />
  );
};
