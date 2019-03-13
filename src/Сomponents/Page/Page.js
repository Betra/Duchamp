import React from "react";

import { Main } from "../Main";
import { Menu } from "../Menu";
import { Board } from "../Board";

import styles from "./Page.module.css";

export const Page = () => (
  <main className={styles.page}>
    <Menu />
    <Board>
      <Main />
    </Board>
  </main>
);
