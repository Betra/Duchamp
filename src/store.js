import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

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

const article = (state, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return {
        title: action.title,
        image: action.image,
        text: action.text,
        brief: action.brief,
        link: action.link
      };
    default:
      return state;
  }
};

const articles = (state, action) => {
  if (typeof state === "undefined") return "";
  switch (action.type) {
    case "ADD_ARTICLE":
      return article(undefined, action);
    default:
      return state;
  }
};

const cutUpApp = combineReducers({ cutups, articles });

export const store = createStore(
  cutUpApp,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
);
