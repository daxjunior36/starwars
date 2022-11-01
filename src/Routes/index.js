import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Planets from '../pages/Planet';

function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/planets" component={ Planets } />
    </Switch>
  );
}

export default AppRoutes;
