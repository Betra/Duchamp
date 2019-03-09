import React from "react";
import styles from "./BodyBoard.module.css";

import { Form } from "../Form";
import { Paper } from "../Paper";
import { buildLayout } from "../../utils/buildLayout";

export class BodyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cutUps: [] };
  }

  handleCutUpArray = cutUpArray => {
    this.setState({ cutUps: cutUpArray });
    buildLayout("boardLayout", 3);
  };

  render() {
    const { cutUps } = this.state;
    return (
      <main className={styles.input}>
        <Form onSubmit={this.handleCutUpArray} />

        <section className={styles.board} id="boardLayout">
          {cutUps.map((cutUp, id) => (
            <Paper key={id}>{cutUp}</Paper>
          ))}
        </section>
      </main>
    );
  }
}
