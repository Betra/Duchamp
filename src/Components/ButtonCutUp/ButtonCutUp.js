import React, { Component } from 'react';
import styles from './buttonCutUp.module.css';
import Button from '../Button/Button';

function ButtonCutUp(props) {
  const text = 'Hello World, My Name Is Igor. Im from Russia';
  const WordsAmount = text.split(" ").length;

  //Cut up by sentences:
const sentences = text.match(/(.*?[.?!])(?: |$)/g)

  if (WordsAmount > 3) {
    //Generate Random amount of word in a current sentence in a cut, from one to full sentence
  }

  return (<h1>{sentences.length}</h1>);
}
ButtonCutUp()

export default ButtonCutUp;