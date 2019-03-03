import React from "react";


import { PopupWelcome } from "../PopupWelcome";

import { Link } from 'react-router-dom';

import { Main } from '../Main';

export class Body extends React.Component {
  render() {
    return(
      <Main />
      /*<PopupWelcome />
      <Link to="/">YE</Link>*/
    );
  }
}
