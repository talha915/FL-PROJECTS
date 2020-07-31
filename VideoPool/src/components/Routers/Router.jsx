import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Index from '../Index';
import Question from '../Question';
import Outro from '../Outro';
import Branding from '../Branding';
import General from '../General';

function Router() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Index} />     
        <Route path="/question/vote1" component={Question} exact/> 
        <Route path="/question/vote2" component={Question} exact/>
        <Route path="/question/vote3" component={Question} exact/>
        <Route path="/question/addvote" component={Question} exact/>
        <Route path="/outro/video" component={Outro} exact/>
        <Route path="/outro/gif" component={Outro} exact/>
        <Route path="/outro/text" component={Outro} exact/>
        <Route path="/branding/colors" component={Branding} exact/>
        <Route path="/branding/logo" component={Branding} exact/>
        <Route path="/branding/logosounds" component={Branding} exact/>
        <Route path="/general/export" component={General} exact/>
        <Route path="/general/settings" component={General} exact/>
      </Switch>
    </div>
  );
}

export default Router;
