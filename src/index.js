import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//import { Body } from './components/Body';
import { Text } from './components/Text';
import { ButtonCutUp, cutRandomPieces } from './components/ButtonCutUp';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text: '', submitted: false};
  }

  handleTextChange = val => this.setState({text: val});

  renderCutups(text) {
    const cutUps = cutRandomPieces(text);
    alert(cutUps);
  }

  render() {
    return (
      <div>
        <Text onTextChange={this.handleTextChange}/>
        <ButtonCutUp onClick={this.renderCutups} text={this.state.text}/>
      </div>
    )
  }
}


ReactDOM.render(<Form />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
