import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Index from '../Index';
import Question from '../Question';
import Video from '../Video';
import Outro from '../Outro';
class Router extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route component={Index} path="/" exact/>
                    <Route component={Video} path="/video" exact/>
                    <Route component={Question} path="/question/vote1" exact/>
                    <Route component={Question} path="/question/vote2" exact/>
                    <Route component={Question} path="/question/vote3" exact/>
                    <Route component={Question} path="/question/addvote" exact/>
                    <Route component={Outro} path="/outro/video" exact/>
                    <Route component={Outro} path="/outro/gif" exact/>
                    <Route component={Outro} path="/outro/text" exact/>
                </Switch>
            </div>
        )
    }
}

export default Router;