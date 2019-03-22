import React from "react";

import { Main } from "../Main";
import { Menu } from "../Menu";
import { Board } from "../Board";

import styles from "./Page.module.css";
import { connect } from "react-redux";

import { applyLifecycle } from "react-lifecycle-component";
import { shiftBigMenu, shiftMediumMenu } from "../../utils";

export let Page = () => (
  <main className={styles.page}>
    <Menu />
    <Board>
      <Main />
    </Board>
  </main>
);

let shiftMenu;
let isShifting = false;

if (window.innerWidth >= 1000) {
  shiftMenu = shiftBigMenu;
  isShifting = true;
} else if (window.innerWidth < 1000 && window.innerWidth > 600) {
  shiftMenu = shiftMediumMenu;
  isShifting = true;
}

if (isShifting) {
  const mapDispatchToProps = () => ({
    componentDidMount: () =>
      window.addEventListener("scroll", () => shiftMenu())
  });

  Page = connect(mapDispatchToProps)(applyLifecycle(Page));
} else Page = connect()(Page);
