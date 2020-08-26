import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Index from '../Index';
import Question from '../Question';
import Video from '../Video';
import Outro from '../Outro';
import Branding from '../Branding';
import Setting from '../Setting';
import Result from '../Result';

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
                    <Route component={Branding} path="/branding/colors" exact/>
                    <Route component={Branding} path="/branding/logo" exact/>
                    <Route component={Branding} path="/branding/logosounds" exact/>
                    <Route component={Setting} path="/general/settings" exact/>
                    <Route component={Setting} path="/general/export" exact/>
                    <Route component={Result} path="/results/vote1" exact/>
                    <Route component={Result} path="/results/vote2" exact/>
                    <Route component={Result} path="/results/vote3" exact/>
                    <Route component={Result} path="/results/analytics" exact/>
                </Switch>
            </div>
        )
    }
}

export default Router;