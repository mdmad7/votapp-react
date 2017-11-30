import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import AdminLogin from '../containers/AdminLogin';
import Dashboard from './Dashboard';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/admin" component={AdminLogin} />
      <Route path="/dashboard" component={Dashboard} />>
    </Switch>
  </main>
);

export default Main;
