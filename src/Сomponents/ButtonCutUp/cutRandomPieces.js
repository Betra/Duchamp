import { getRandomInRange } from "../../utils";
import { addCutup } from "../../actions";
import { store } from "../../store";

export function cutRandomPieces(text) {
  if (!text) return "";

  text.match(/[!.?]$/) ? (text = String(text)) : (text += ".");
  text = text.replace(/[\r\n]+/, "");

  const sentences = text.match(/[^.!?]+[.!?]+/g);

  const cutUps = [];

  while (sentences.length > 0) {
    let sentence = sentences[0].split(/ /); // array with words of this sentences

    while (true) {
      let wordsInCutUp; // returns random amount of words in this sentence
      while (true) {
        wordsInCutUp = getRandomInRange(1, sentence.length + 1);
        if (wordsInCutUp > 4) continue;
        else break;
      }

      let cutUp = sentence.splice(0, wordsInCutUp);

      cutUp = cutUp.join(" ");
      store.dispatch(addCutup(cutUp));
      cutUps.push(cutUp); // add the cutup to the array

      if (sentence.length === 0) {
        sentences.shift();
        break;
      }
    }
  }

  return cutUps.filter(Boolean);
}
