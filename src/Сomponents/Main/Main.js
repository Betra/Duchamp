import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { BodyBoard } from '../BodyBoard';
import { BodyWelcome } from '../BodyWelcome';
import { BodyApi } from '../BodyApi';
import { BodyAbout } from '../BodyAbout';
import { BodyBeginner } from '../BodyBeginner';

export const Main = () => (
    <main style={{flex: '1 0 auto'}}>
      <Switch>
        <Route exact path='/' component={BodyWelcome} />
        <Route exact path='/input' component={BodyBoard} />
        <Route exact path='/api?Wiki' component={BodyApi} />
        <Route exact path='/api?NYT' component={BodyApi} />
        <Route exact path='/api?Meduza' component={BodyApi} />
        <Route exact path='/about' component={BodyAbout} />
        <Route exact path='/beginner' component={BodyBeginner} />
      </Switch>
    </main>
);