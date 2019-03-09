import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import "./CSS/global.css";
import { Body } from "./Сomponents/Body";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Body />
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
