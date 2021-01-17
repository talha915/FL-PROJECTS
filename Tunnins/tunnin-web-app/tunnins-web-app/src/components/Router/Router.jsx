import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Main from '../Main';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route component={Main} path="/" exact />
                </Switch>
            </div>
        )
    }
}

export default Router;