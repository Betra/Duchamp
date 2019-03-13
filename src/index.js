import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./CSS/global.css";
import { App } from "./Сomponents/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
