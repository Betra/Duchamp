import React from "react";

import styles from "./MenuOption.module.css";

import cx from "classnames";

export const MenuOption = ({
  isActive,
  onClick,
  heading,
  description = ""
}) => (
  <section
    className={cx(styles.option, { [styles.activeOption]: isActive })}
    onClick={onClick}
  >
    <span className={styles.heading}>{heading}</span>
    <span className={styles.description}>{description}</span>
  </section>
);
