import React from "react";

import { PaperList } from "../PaperList";
import { Form } from "../Form";

export class BodyBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cutUps: [] };
  }

  handleCutUpArray = cutUpArray => this.setState({ cutUps: cutUpArray });

  render() {
    const { cutUps } = this.state;

    return (
      <main>
        <Form onSubmit={this.handleCutUpArray} />
        <PaperList cutUps={cutUps} />
      </main>
    );
  }
}
