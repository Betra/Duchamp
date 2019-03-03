import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PopupInput } from '../../PopupInput';
import { PopupWelcome } from '../../PopupWelcome';

export function Main() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={PopupWelcome} />
          <Route exact path='/Input' component={PopupInput} />

        </Switch>
      </main>
    );
  }

