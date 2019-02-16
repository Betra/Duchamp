import React, { Component } from 'react';
import styles from './Text.css';

class Text extends React.Component {
  render() {
    return (
      <textarea className={styles.inputArea} />
    );
  }
}

export default Text;