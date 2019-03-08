import React from 'react';

import styles from './button.module.css';

export const Button = ({onClick, text, value = 'Cut Up!', disabled = false}) => (
  <button onClick={onClick}
          disabled={disabled}
          text={text}
          className={styles.button}>
    {value}
  </button>
);

