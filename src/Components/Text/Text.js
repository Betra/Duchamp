import React, { Component } from 'react';
import styles from './Text.css';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {text: ''};
  }

  handleInput = event => this.setState({text: event.target.value});
  
  handleSubmit(event) {
      alert(this.state.text);
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <textarea 
        className={styles.inputArea} 
        value={this.state.text} 
        onChange={this.handleInput}
        placeholder='Insert your text here' 
        />
        <br />
        <input type ="submit" />
      </form>
    );
  }
}

export default Text;