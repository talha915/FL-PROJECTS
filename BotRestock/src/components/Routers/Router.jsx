import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../Index';
import Settings from '../Settings';
import PopupTweets from '../Settings/PopupTweets';

function Router() {
  return (
    <div >
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/settings" component={Settings} />
        <Route path="/settings/PopupTweets" component={PopupTweets} />
      </Switch>
    </div>
  );
}

export default Router;
