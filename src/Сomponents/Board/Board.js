import React from "react";

import styles from "./Board.module.css";

export const Board = ({ children }) => (
  <section className={styles.board} id="board">
    {children}
  </section>
);
