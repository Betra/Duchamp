import React from "react";
import { Switch, Route } from "react-router-dom";

import { FormInput } from "../FormInput";
import { FormWiki } from "../FormWiki";
import { FormMeduza } from "../FormMeduza";
import { FormGuardian } from "../FormGuardian";

import { BodyAbout } from "../BodyAbout";

import { NotFound } from "../NotFound";

export const Main = () => (
  <main style={{ flex: "1 0 auto" }}>
    <Switch>
      <Route exact path="/" component={FormInput} />
      <Route exact path="/wiki" component={FormWiki} />
      <Route exact path="/guardian" component={FormGuardian} />
      <Route exact path="/meduza" component={FormMeduza} />
      <Route exact path="/about" component={BodyAbout} />
      <Route component={NotFound} />
    </Switch>
  </main>
);
