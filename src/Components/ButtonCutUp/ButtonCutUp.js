import React, { Component } from 'react';
import styles from './buttonCutUp.module.css';
import Button from '../Button/Button';

function ButtonCutUp(props) {
  const text = 'Hello World, My Name Is Igor. Im from Russia! Do you know it?';
  const WordsAmount = text.split(" ").length;

  //Cut up by sentences:
  const sentences = text.match( /[^\.!\?]+[\.!\?]+/g ); 
  // I want to take sentences from text
  // take random(1, sentence.length) amount of words in it 
  // These words are compiled as a "Cut Up" and excluded from this sentence
  // Nice solution?

  if (WordsAmount > 3) {
    //Generate Random amount of word in a current sentence in a cut, from one to full sentences
  }
  return(
    <Button
    />
  );
}

export default ButtonCutUp;