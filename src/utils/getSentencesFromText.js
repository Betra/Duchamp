export const getSentencesFromText = (text, amount = 0) => {
  if (!text) return "";

  text.match(/[!.?]$/) ? (text = String(text)) : (text += ".");
  text = text.replace(/[\r\n]+/, "");

  const sentences = text.match(/[^.!?]+[.!?]+/g);

  if (amount !== 0) {
    let sentencesText = "";
    for (let i = 0; i <= amount; i++) sentencesText += sentences[i];

    return sentencesText;
  } else return sentences;
};
