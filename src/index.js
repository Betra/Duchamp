import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//import { Body } from './сomponents/Body';
import { Text } from './Сomponents/Text';
import { ButtonCutUp, cutRandomPieces } from './Сomponents/ButtonCutUp';
import {  shuffleArray } from './utils'


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {text: '', showPaper: false};
  }

  handleTextChange = val => this.setState({text: val});

  handleClick(text) {
    this.renderCutups(text)
    
  }

  renderCutups(text) {
    let cutUps = cutRandomPieces(text);
    cutUps = shuffleArray(cutUps);
    alert(cutUps);
  }
  
  render() {
    return (
      <div>
        <Text onTextChange={this.handleTextChange} text={this.state.text}/>
        <ButtonCutUp onClick={this.handleClick} text={this.state.text} disabledOn={!this.state.text}/>
      </div>
    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
