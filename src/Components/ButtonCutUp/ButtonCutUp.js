import React, { Component } from 'react';
import styles from './buttonCutUp.module.css';
import Button from '../Button/Button';
import { getRandomInRange } from '../../utils/getRandomInRange';

function ButtonCutUp(props) {
  const text = 'Hello World, My Name Is Igor. Im from Russia! Do you know it?'; //this.value.text in future
  const WordsAmount = text.split(/ /).length; //Rough amount of words in the text
  const sentences = text.match( /[^\.!\?]+[\.!\?]+/g ); // returns array with sentences
  const CutUps = []; 

  while (sentences.length > 0) { // separate file?
    let sentence = sentences[0].split(/ /); // array with words of this sentences
    
    while (true) {
      let cutAt = getRandomInRange(1,sentence.length +1); // returns random amount of words in this sentence
      
      if (cutAt!=(sentence.length)) { 
        const CutUp = sentence.splice(0,cutAt);
        CutUps.push(CutUp.join(' ')); // add the cutup to the array
        
       if (sentence.length <= 0) {
         sentence.shift();
        } else {
          break;
        }

      } else {
        CutUps.push(sentence.join(" "));
        sentences.shift();
        break;
      }
    }
  }

  return(
    <Button
    />
  );
}

export default ButtonCutUp;