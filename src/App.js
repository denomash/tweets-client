import React from 'react';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import AppRoutes from './routes/AppRoutes';
import configureStore from './store/configureStore';

const store = configureStore();

store.dispatch({ type: 'TEST', message: 'test Success' });

const App = () => (
  <Provider store={store}>
    <AppRoutes />
  </Provider>
);

export default App;
