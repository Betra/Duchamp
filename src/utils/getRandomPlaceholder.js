import { getRandomInRange } from "./getRandomInRange";
import { placeholderMatrix } from "./placeholderMatrix";

export const getRandomPlaceholder = () => {
  const placeholderNumber = getRandomInRange(0, placeholderMatrix.length + 1);

  if (placeholderMatrix[placeholderNumber] === "sonnet") {
    return "What about Shakespeare Sonnet №" + getRandomInRange(1, 155) + "?";
  }

  return placeholderMatrix[placeholderNumber];
};
