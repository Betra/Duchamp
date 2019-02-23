import React from 'react';
import { Text } from '../Text';
import { ButtonCutUp, cutRandomPieces } from '../ButtonCutUp';
import {  shuffleArray } from '../../utils'

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {text: ''};
  }

  handleTextChange = val => this.setState({text: val});

  handleClick(text) {
    let cutUps = this.renderCutups(text);
    this.props.onSubmit(cutUps);
  }

  renderCutups(text) {
    let cutUps = cutRandomPieces(text);
    cutUps = shuffleArray(cutUps);
    return cutUps;
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