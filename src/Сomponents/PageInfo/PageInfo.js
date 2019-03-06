import React from 'react';
import styles from './PageInfo.module.css';

export const PageInfo = (props) => (
  <section className={styles.info}>
    <h1>
      {props.header}
    </h1>
    {props.children}
  </section>
);