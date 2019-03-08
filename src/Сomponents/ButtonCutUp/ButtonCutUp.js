import React from 'react';
//import styles from './buttonCutUp.module.css';

import { Button } from '../Button';

export class ButtonCutUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onClick(this.props.text);
  }

  render() {
    return (
      <Button 
        onClick={this.handleClick} 
        text={this.props.text}
        disabled={this.props.disabledOn}
        value="Cut Up!"
        />
    );
  }
}