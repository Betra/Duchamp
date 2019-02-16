import React, { Component } from 'react';
import styles from './InputArea.module.css';

function InputArea(props) {
  return (
    <section className={styles.InputSection}>
      {props.children}
    </section>
  );
}

export default InputArea
