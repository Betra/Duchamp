import React from 'react';

import { Header} from "../Header";
import { Description } from "../Description";
import { MethodChoice } from "../MethodChoice";
import { Footer } from "../Footer";

export function PopupWelcome() {
    return(
      <main className="wrapper">
        <Header />
        <Description />
        <MethodChoice />
        <Footer />
      </main>
    );
}
