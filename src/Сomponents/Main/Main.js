import React from "react";
import { Switch, Route } from "react-router-dom";

import { BodyBoard } from "../BodyBoard";
import { FormWiki } from "../FormWiki";
import { BodyAbout } from "../BodyAbout";

import { FormInput } from "../FormInput";

export const Main = () => (
  <main style={{ flex: "1 0 auto" }}>
    <Switch>
      <Route exact path="/" component={FormInput} />
      <Route exact path="/wiki" component={FormWiki} />
      <Route exact path="/nyt" component={FormWiki} />
      <Route exact path="/meduza" component={FormWiki} />
      <Route exact path="/about" component={BodyAbout} />
    </Switch>
  </main>
);
