import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'antd/dist/antd.css';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { store, persistor } from './store';

// const reduxStore = store();
store.dispatch({ type: 'LOGIN', id: {} });
const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRoutes />
    </PersistGate>
  </Provider>
);

export default App;
