import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../Index';
import Question from '../Question';
function Router() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Index} />     
        <Route path="/question/vote1" component={Question} exact/> 
        {/* <Route path="/question/vote1" exact/> */}
        <Route path="/question/vote2" component={Question} exact/>
        <Route path="/question/vote3" component={Question} exact/>
        <Route path="/question/addvote" component={Question} exact/>
      </Switch>
    </div>
  );
}

export default Router;
