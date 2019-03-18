export const text = (state = "", action) => {
  switch (action.type) {
    case "UPDATE_TEXT":
      return action.text;
    default:
      return state;
  }
};

export const updateText = text => ({
  type: "UPDATE_TEXT",
  text
});
