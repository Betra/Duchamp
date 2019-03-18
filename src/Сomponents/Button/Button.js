import React from "react";

import styles from "./Button.module.css";

export const Button = ({ onClick, value = "Cut Up!", disabled = false }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={styles.button}
    >
      {value}
    </button>
  );
};
