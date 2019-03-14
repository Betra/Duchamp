let nextCutupId = 0;

export const addCutup = text => {
  return {
    type: "ADD_CUTUP",
    text,
    id: nextCutupId++
  };
};
