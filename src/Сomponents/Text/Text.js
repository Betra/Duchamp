import React from 'react';

import styles from './text.module.css';
import { getRandomPlaceholder} from '../../utils';

const lineHeight = 18;

export class Text extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.state = { rows: 6 };
  }

  handleInput(event) { 
    // const oldRows = event.target.rows;
    // event.target.rows = 1;
    // const newRows = ~~(event.target.scrollHeight/lineHeight);

    // if (newRows === oldRows) { event.target.rows = newRows; }
    // this.setState({rows: newRows});

    this.props.onTextChange(event.target.value);
  }

  render() {
    const { text } = this.props;

    return (
          <textarea autoFocus
            rows={this.state.rows}
            className={styles.inputArea} 
            value={text} 
            onChange={this.handleInput}
            style={{lineHeight: `${lineHeight}px`}}
            placeholder={getRandomPlaceholder()} 
          />
    );
  }
}
