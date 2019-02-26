import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//import { Body } from './Сomponents/Body';
import './CSS/global.css';
import { Section } from './Сomponents/Section';

function Body() {
  return(
    <body>
    <header>Duchamp IT</header>
    <main className="choice">
      <Section>a</Section>
      <Section>b</Section>
      <Section>c</Section>
      <Section>c</Section>
    </main>

    <footer>
      <span>About</span>
      <span>What's Cut Up?</span>
      <span>Open Source</span>
    </footer>
    </body>
  );
}
ReactDOM.render(<Body />, document.getElementById('root'));


serviceWorker.unregister();
