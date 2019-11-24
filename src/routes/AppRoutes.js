import React from 'react';
import { Router, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import { Layout } from 'antd';

import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';

const history = createBrowserHistory();

const AppRoutes = () => (
  <Router history={history}>
    <Switch>
      <Layout>
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
      </Layout>
    </Switch>
  </Router>
);

export default AppRoutes;
