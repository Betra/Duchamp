import React from "react";

import { Button } from "../Button";

export class ButtonCutUp extends React.Component {
  handleClick = event => {
    event.preventDefault();
    this.props.onClick(this.props.text);
  };

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
