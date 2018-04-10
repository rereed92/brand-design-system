import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../../presentational/Home/Home';
import { Layout } from '../../presentational/Layout/Layout';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/foundations/layout' component={Layout}/>
                </Switch>
            </div>
        );
    }
}

export default Main;

