import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Main from '../Main';
import Signup from '../Signup/Signup';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route component={Main} path="/" exact />
                    <Route component={Signup} path="/signup" exact/>
                </Switch>
            </div>
        )
    }
}

export default Router;