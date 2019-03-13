import React from "react";

import styles from "./ParsedApiPage.module.css";

export const ParsedApiPage = props => (
  <section className={styles.suggestion}>
    {props.imageUrl !== "" && (
      <a href={props.link} className={styles.suggestionImage}>
        <img src={props.imageUrl} alt={props.title} />
      </a>
    )}

    <section className={styles.suggestionText}>
      <section className={styles.suggestionHeader}>
        <a href={props.link}>{props.title}</a>
      </section>

      <section className={styles.suggestionBrief}>{props.brief}</section>
    </section>
  </section>
);
