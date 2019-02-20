import React, { Component } from 'react';
import styles from './Body.module.css';
import globalStyles from '../../CSS/global.css';

import { PopupWelcome } from '../PopupWelcome/';
import { Button } from '../Button';
import { ButtonCutUp } from '../ButtonCutUp';
import { Paper } from '../GenerateTornPaperPiece';

export function Body() {
  return(
    <main>
      
      <h1>Hello</h1>
      <ButtonCutUp />   
      <Button text="Hey"/>
      <PopupWelcome  /> 

    </main>
  );
}