/**
 * Shuffles array in place. ES6 version
 * @param {Array} argArray items An array containing the items.
 */
export function shuffleArray(argArray) {
  for (let i = argArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [argArray[i], argArray[j]] = [argArray[j], argArray[i]];
  }
  return argArray;
}