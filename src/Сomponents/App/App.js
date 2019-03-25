import React from "react";

import { Header } from "../Header";
import { Description } from "../Description";
import { Page } from "../Page";
import { Footer } from "../Footer";
import { GoUp } from "../GoUp";

export const App = () => (
  <main className="wrapper">
    <Header />
    <Description />
    <Page />
    <GoUp />
    <Footer />
  </main>
);
