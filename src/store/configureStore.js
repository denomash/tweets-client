import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';

const persistConfig = {
  key: 'root',
  storage
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
      auth: authReducer
    })
  );

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  const persistor = persistStore(store);

  return { store, persistor };
};
