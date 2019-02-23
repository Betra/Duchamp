import React, { Component } from 'react';
import styles from './Body.module.css';
import globalStyles from '../../CSS/global.css';
import { Form } from '../Form';
import { Paper} from '../Paper';

export class Body extends React.Component {
  constructor(props) {
    super(props);
    this.handleCutUpArray = this.handleCutUpArray.bind(this);
    this.state = {cutUps: []};
  }

  handleCutUpArray = cutUpArray => this.setState({cutUps: cutUpArray});

  render() {
    const { cutUps } = this.state;
    return(
      <main>
        <Form onSubmit={this.handleCutUpArray}/>
        {cutUps.map((cutUp)=> <Paper>{cutUp}</Paper>)}
      </main>
    );
  }
}

