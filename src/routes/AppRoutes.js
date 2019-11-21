import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';

import Login from '../components/Login/Login';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Layout>
        <Route exact path="/login" component={Login} />
      </Layout>
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
