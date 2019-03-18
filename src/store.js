import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { article, text } from "./actions";

const cutups = (state = [], action) => {
  switch (action.type) {
    case "CLEAR_CUTUPS":
      return [];

    case "ADD_CUTUPS":
      return action.cutups;
    default:
      return state;
  }
};

const cutUpApp = combineReducers({ cutups, article, text });

export const store = createStore(
  cutUpApp,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
