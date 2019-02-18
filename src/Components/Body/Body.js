import React, { Component } from 'react';
import styles from './body.module.css';
import globalStyles from '../../CSS/global.css';
import PopupWelcome from '../PopupWelcome/PopupWelcome';

import Button from '../Button/Button';
import ButtonCutUp from '../ButtonCutUp/ButtonCutUp';


function Body() {
  return(
    <main>
      <h1>Hello</h1>
      <ButtonCutUp />
      <Button text="Hey"/>
      <PopupWelcome  />
    </main>
  );
}


export default Body;