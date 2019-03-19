export const addCutUps = cutUps => {
  cutUps = Object.assign({}, cutUps);
  return {
    type: "ADD_CUTUPS",
    cutups: cutUps
  };
};
