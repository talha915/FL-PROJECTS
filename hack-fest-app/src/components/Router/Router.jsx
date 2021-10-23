import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Main from '../Main';
import Dashboard from '../Dashboard/Dashboard';

function Router() {
    return (
        <div>
            <Switch>
                <Route component={Main} path="/" exact />
                <Route component={Main} path="/signup" />
                <Route component={Dashboard} path="/dashboard" />
            </Switch>
        </div>
    );
}
export default Router;