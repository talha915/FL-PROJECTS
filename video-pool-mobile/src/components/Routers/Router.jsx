import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Index from '../Index';
import Main from '../Main';
import Video from '../Video';
class Router extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route component={Index} path="/" exact/>
                    <Route component={Video} path="/video" exact/>
                </Switch>
            </div>
        )
    }
}

export default Router;