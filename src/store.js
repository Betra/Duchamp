import { createStore, combineReducers } from "redux";

const cutup = (state, action) => {
  switch (action.type) {
    case "ADD_CUTUP":
      return {
        id: action.id,
        text: action.text
      };
    default:
      return state;
  }
};

const cutups = (state, action) => {
  if (typeof state === "undefined") return [];
  switch (action.type) {
    case "ADD_CUTUP":
      return [...state, cutup(undefined, action)];
    case "CLEAR_CUTUPS":
      return [];
    default:
      return state;
  }
};

export const store = createStore(
  cutups,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
