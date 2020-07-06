import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../Index';

function Router() {
  return (
    <div >
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </div>
  );
}

export default Router;
