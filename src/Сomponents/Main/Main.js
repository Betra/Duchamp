import React from "react";
import { Switch, Route } from "react-router-dom";

import { BodyBoard } from "../BodyBoard";
import { WikiPage } from "../WikiPage";
import { BodyAbout } from "../BodyAbout";

export const Main = () => (
  <main style={{ flex: "1 0 auto" }}>
    <Switch>
      <Route exact path="/" component={BodyBoard} />
      <Route exact path="/wiki" component={WikiPage} />
      <Route exact path="/nyt" component={WikiPage} />
      <Route exact path="/meduza" component={WikiPage} />
      <Route exact path="/about" component={BodyAbout} />
    </Switch>
  </main>
);
