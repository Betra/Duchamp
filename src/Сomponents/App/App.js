import React from "react";

import { Header } from "../Header";
import { Description } from "../Description";
import { Page } from "../Page";
import { Footer } from "../Footer";

export const App = () => (
  <main className="wrapper">
    <Header />
    <Description />
    <Page />
    <Footer />
  </main>
);
