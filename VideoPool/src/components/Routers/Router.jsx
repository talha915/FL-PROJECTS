import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../Index';
import Question from '../Question';
function Router() {
  return (
    <div >
      <Switch>
        <Route path="/" component={Index} exact />     
        <Route path="/question" component={Question} exact /> 
      </Switch>
    </div>
  );
}

export default Router;
