import React from "react";

import { Text } from "../Text";
import { ButtonCutUp, cutRandomPieces } from "../ButtonCutUp";
import { shuffleArray } from "../../utils";

import styles from "./Form.module.css";

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text ? this.props.text : "" };
  }

  handleTextChange = val => this.setState({ text: val });

  handleClick = text => {
    let cutUps = this.renderCutups(text);
    this.props.onSubmit(cutUps);
  };

  renderCutups = text => {
    let cutUps = cutRandomPieces(text);
    return shuffleArray(cutUps);
  };

  render() {
    return (
      <section className={styles.formInput}>
        <Text onTextChange={this.handleTextChange} text={this.state.text} />
        <ButtonCutUp
          onClick={this.handleClick}
          text={this.state.text}
          disabledOn={!this.state.text}
        />
      </section>
    );
  }
}
