import React, { Component } from 'react';
import styles from './Paper.module.css';

// <Paper cut={true} ragged={false} > </Paper>
export function Paper(props) {
  
  if (((props.cut || props.ragged) && props.cut !== props.ragged) && props.ragged == true) {
    //Case Ragged
  }
  else {
    //Case Cut
    return (
      <div className={styles.paper}>
       {props.children}
      </div>
    )
  }
}