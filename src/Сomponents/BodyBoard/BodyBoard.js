import React from "react";

import { PaperList } from "../PaperList";
import { Form } from "../Form";

import styles from "./Board.module.css";

export class BodyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cutUps: [] };
  }
  handleCutUpArray = cutUpArray => this.setState({ cutUps: cutUpArray });

  render() {
    return (
      <main className={styles.board}>
        <Form onSubmit={this.handleCutUpArray} />
        <PaperList cutUps={this.state.cutUps} />
      </main>
    );
  }
}
