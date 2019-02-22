import { getRandomInRange } from '../../utils';

export function cutRandomPieces(text) {
  text.match(/[!.?]/) ? text = String(text) : text += '.';
  
  const sentences = text.match( /[^.!?]+[.!?]+/g );

  const cutUps = []; 

    while (sentences.length > 0) {
      let sentence = sentences[0].split(/ /); // array with words of this sentences
      
      while (true) {
        let wordsInCutUp = getRandomInRange(1,sentence.length+1); // returns random amount of words in this sentence
        let cutUp = sentence.splice(0,wordsInCutUp);
    

        cutUp = cutUp.join(' ');
        cutUps.push(cutUp); // add the cutup to the array
      

        if (sentence.length === 0) { sentences.shift(); break;}
      }
    }


  return cutUps.filter(Boolean);
}