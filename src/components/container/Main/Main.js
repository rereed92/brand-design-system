import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../../presentational/Home/Home';

import { Introduction } from '../../presentational/Introduction/Introduction';
import { Goals } from '../../presentational/Goals/Goals';
import { CodeGuidelines } from '../../presentational/CodeGuidelines/CodeGuidelines';

import { Layout } from '../../presentational/Layout/Layout';
import { Colour } from '../../presentational/Colour/Colour';
import { Iconography } from '../../presentational/Iconography/Iconography';
import { Typography } from '../../presentational/Typography/Typography';
import { Imagery } from '../../presentational/Imagery/Imagery';
import { ToneOfVoice } from '../../presentational/ToneOfVoice/ToneOfVoice';

class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />

                    <Route exact path='/overview/introduction' component={Introduction} />
                    <Route exact path='/overview/goals' component={Goals} />
                    <Route exact path='/overview/code-guidelines' component={CodeGuidelines} />

                    <Route exact path='/foundations/layout' component={Layout} />
                    <Route exact path='/foundations/colour' component={Colour} />
                    <Route exact path='/foundations/iconography' component={Iconography} />
                    <Route exact path='/foundations/typography' component={Typography} />
                    <Route exact path='/foundations/imagery' component={Imagery} />
                    <Route exact path='/foundations/tone-of-voice' component={ToneOfVoice} />
                </Switch>
            </div>
        );
    }
}

export default Main;

