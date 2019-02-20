import React, { Component } from 'react';
import styles from './buttonCutUp.module.css';
import ReactDOM from 'react-dom';

import { Button } from '../Button';
import { cutRandomPieces} from './cutRandomPieces';
import { Paper } from '../Paper';

export class ButtonCutUp extends React.Component {
  constructor(props) {
    super(props);
    const text = 'Hello World, My Name Is Igor. Im from Russia! Do you know it?'; //this.value.text in future
    const sentences = text.match( /[^\.!\?]+[\.!\?]+/g ); // returns array with sentences
    const cutUps = cutRandomPieces(sentences);
    this.renderCutups = this.renderCutups.bind(this);
    this.handleClick = this.handleClick.bind(this);
    console.log(cutUps);
    console.log("IM ALIVE");


    this.state = {
      questions: Cutups,
         displayQuestions: false
    };
  }

  renderCutups() {
    ReactDOM.render(
      <Paper>ss</Paper>,
      document.getElementById('root')
    );
  }

  handleClick(event) {
    this.renderCutups();
    event.preventDefault();
  }


  render() {
    return (
      <button onClick={this.handleClick}>CLIIIIIICK</button>
    );
  }
}


