import React from "react";

import { Header} from "../Header";
import { Main } from '../Main';
import { Footer } from "../Footer";
import { Description } from "../Description";

export const Body = () => (
  <main className="wrapper" id="wrapper">
    <Header />
    <Description />
    <Main />
    <Footer />
  </main>
);