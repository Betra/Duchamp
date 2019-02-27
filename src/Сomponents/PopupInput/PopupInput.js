import React from 'react';
//import styles from './popupInput.module.css';

import { Form } from "../Form";
import { Paper} from "../Paper";

export class PopupInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleCutUpArray = this.handleCutUpArray.bind(this);
    this.state = {cutUps: []};
  }

  handleCutUpArray = cutUpArray => this.setState({cutUps: cutUpArray});

  render() {
    const { cutUps } = this.state;
    return(
      <main>
        <Form onSubmit={this.handleCutUpArray}/>
        {cutUps.map((cutUp)=> <Paper>{cutUp}</Paper>)}
      </main>
    );
  }
}