import React, { Component } from 'react';
import styles from './buttonCutUp.module.css';

import { Button } from '../Button';
import { cutRandomPieces} from './cutRandomPieces'

export function ButtonCutUp(props) {
  const text = 'Hello World, My Name Is Igor. Im from Russia! Do you know it?'; //this.value.text in future
  const sentences = text.match( /[^\.!\?]+[\.!\?]+/g ); // returns array with sentences

  const cutUps = cutRandomPieces(sentences);
  console.log(cutUps);
  return(
    <Button
    />
  );
}
