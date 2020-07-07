import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../Index';
import Settings from '../Settings';

function Router() {
  return (
    <div >
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </div>
  );
}

export default Router;
