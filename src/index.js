import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./CSS/global.css";

import { App } from "./Сomponents/App";
import { store } from "./store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter store={store}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
