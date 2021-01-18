import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Main from '../Main';
import SignUp from '../Signup/Signup';
import Verify from '../Signup/Verify';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route component={Main} path="/" exact />
                    <Route component={SignUp} path="/signup" exact/>
                    <Route component={Verify} path="/verify" exact/>
                </Switch>
            </div>
        )
    }
}

export default Router;