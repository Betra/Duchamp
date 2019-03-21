import React from "react";

import { Main } from "../Main";
import { Menu } from "../Menu";
import { Board } from "../Board";

import styles from "./Page.module.css";
import { connect } from "react-redux";

import { applyLifecycle } from "react-lifecycle-component";
import { shiftMenu } from "../../utils";

export let Page = () => (
  <main className={styles.page}>
    <Menu />
    <Board>
      <Main />
    </Board>
  </main>
);

const mapDispatchToProps = dispatch => ({
  componentDidMount: () => window.addEventListener("scroll", () => shiftMenu())
});

Page = connect(mapDispatchToProps)(applyLifecycle(Page));
