import React from 'react';
import styles from './Section.module.css';

export function Section(props) {
  
  return (
    <section className={styles.option}>
    <img src={props.icon} alt="Icon" width={32} />
      <span className={styles.optionText}>{props.children}</span>
    </section>
  );
}
