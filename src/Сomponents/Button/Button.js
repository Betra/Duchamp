import React from "react";

import styles from "./button.module.css";

export const Button = ({ onClick, value = "Cut Up!", disabled = false }) => {
  let handleClick = event => {
    event.preventDefault();
    onClick();
  };
  return (
    <button onClick={handleClick} disabled={disabled} className={styles.button}>
      {value}
    </button>
  );
};
