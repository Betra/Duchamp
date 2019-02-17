import React, { Component } from 'react';
import styles from './Body.module.css';
import globalStyles from '../../CSS/global.css';
import WelcomePop from '../Popup/WelcomePop/WelcomePop';

function Body() {
  return(
    <main>
      <h1>Hello</h1>
      <WelcomePop />
    </main>
  );
}


export default Body;