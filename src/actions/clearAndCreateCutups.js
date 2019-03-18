import { clearCutups } from "./clearCutups";
import { addCutUps } from "./addCutUps";

import { cutRandomPieces, shuffleArray } from "../utils";

export const clearAndCreateCutups = (loadFromInput = true) => (
  dispatch,
  getState
) => {
  dispatch(clearCutups());

  let cutUps = cutRandomPieces(
    loadFromInput === true ? getState().text : getState().article.text
  );
  cutUps = shuffleArray(cutUps);

  dispatch(addCutUps(cutUps));
};
