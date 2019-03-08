import React from 'react';

import styles from './button.module.css';

export const Button = ({onClick, disabled, text, value}) => (
  <button onClick={onClick}
          disabled={disabled}
          text={text}
          className={styles.button}>
    {value}
  </button>
);

