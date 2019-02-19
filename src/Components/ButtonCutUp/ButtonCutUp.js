import React, { Component } from 'react';
import styles from './buttonCutUp.module.css';

import { Button } from '../Button';
import { getRandomInRange } from '../../utils';

export function ButtonCutUp(props) {
  const text = 'Hello World, My Name Is Igor. Im from Russia! Do you know it?'; //this.value.text in future
  const sentences = text.match( /[^\.!\?]+[\.!\?]+/g ); // returns array with sentences
  const cutUps = []; 

  while (sentences.length > 0) { // separate file?
    let sentence = sentences[0].split(/ /); // array with words of this sentences
    
    while (true) {
      let cutAt = getRandomInRange(1,sentence.length +1); // returns random amount of words in this sentence
      
      if (cutAt!=(sentence.length)) { 
        const cutUp = sentence.splice(0,cutAt);
        cutUps.push(cutUp.join(' ')); // add the cutup to the array
        
       if (sentence.length <= 0) {
         sentence.shift();
        } else {
          break;
        }

      } else {
        cutUps.push(sentence.join(" "));
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
