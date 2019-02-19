import React, { Component } from 'react';
import styles from './Text.module.css';
const lineHeight = 18;

export class Text extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {text: '', rows: 1 };
  }

  handleInput(event) { 
    const oldRows = event.target.rows;
    event.target.rows = 1;
    const newRows = ~~(event.target.scrollHeight/lineHeight);

    if (newRows === oldRows) { event.target.rows = newRows; }
    this.setState({
      text: event.target.value,
      rows: newRows
    });
  }

  handleSubmit(event) {
      alert(this.state.text);
      event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <textarea autoFocus
            rows={this.state.rows}
            className={styles.inputArea} 
            value={this.state.text} 
            onChange={this.handleInput}
            style={{lineHeight: `${lineHeight}px`}}
            placeholder='Insert your text here' 
          />
          <br />
          <input type ="submit" />
        </form>
    );
  }
}
