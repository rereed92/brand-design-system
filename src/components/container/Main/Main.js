import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../presentational/Home/Home';
import Overview from '../../presentational/Overview/Overview';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/overview' component={Overview}/>
        </Switch>
      </div>
    );
  }
}

export default Main;

