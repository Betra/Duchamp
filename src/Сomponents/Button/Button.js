import React from 'react';
//import styles from './button.module.css';

//
// <Button click={} text={}/>
//
export function Button(props) {
  return (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
  );
}
