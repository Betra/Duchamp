import React from "react";
import styles from "./Section.module.css";

export const Section = ({ active, onClick, heading, description = "" }) => (
  <section
    className={styles.option}
    id={active && styles.current}
    onClick={onClick}
  >
    <span className={styles.heading}>{heading}</span>
    <span className={styles.description}>{description}</span>
  </section>
);
