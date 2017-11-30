import React from 'react';
import { Route, Switch } from 'react-router-dom';
import withAuth from '../HOC/withAuth';

import Index from '../containers/dashboard/Index';
import VoterPage from '../containers/dashboard/VoterPage';
import CandidatePage from '../containers/dashboard/CandidatePage';

const Dashboard = () => (
  <div>
    <Switch>
      <Route exact path="/dashboard" component={Index} />
      <Route path="/dashboard/candidate" component={CandidatePage} />
      <Route path="/dashboard/voter" component={VoterPage} />
    </Switch>
  </div>
);

export default withAuth(Dashboard);
