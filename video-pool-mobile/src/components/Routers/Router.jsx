import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Index from '../Index';
import Main from '../Main';

class Router extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route component={Index} path="/" exact/>
                    <Route component={Main} path="/main" exact/>
                </Switch>
            </div>
        )
    }
}

export default Router;