import React, { Component } from 'react';
import styles from './button.module.css';

//
// <Button click={} text={}/>
//
export function Button(props) {
  return (
  <button onClick={props.click}>
    {props.text}
  </button>
  );
}
