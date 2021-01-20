import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Main from '../Main';
import SignUp from '../Signup/Signup';
import Verify from '../Signup/Verify';
import Profile from '../Signup/Profile';
import Face from '../Signup/Face';
import Bank from '../Signup/Bank';

class Router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route component={Main} path="/" exact />
                    <Route component={SignUp} path="/signup" exact/>
                    <Route component={Verify} path="/verify" exact/>
                    <Route component={Profile} path="/signup-profile" exact/>
                    <Route component={Face} path="/signup-face" exact/>
                    <Route component={Bank} path="/signup-bank" exact/>
                </Switch>
            </div>
        )
    }
}

export default Router;