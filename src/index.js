// REACT
import React from 'react';
import ReactDOM from 'react-dom';
// REDUX
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {persistStore} from "redux-persist";
// ROUTER
import {routerMiddleware} from "react-router-redux";
import { BrowserRouter } from 'react-router-dom';
// MIDDLEWARES
import logger from 'redux-logger'
// ROUTES
import Routes from "./routes";
//REDUCER
import appReducer from "./reducers";

import registerServiceWorker from './registerServiceWorker';

const middlewares = [routerMiddleware(BrowserRouter), thunk];

// REDUX DEV
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger);
}

const store = createStore(
  appReducer,
  applyMiddleware(...middlewares)
);

const pStore = persistStore(store, {
  whitelist: ['routing', 'core', 'menu']
}, () => {
  if (process.env.CLEAR_STORE) {
    pStore.purgeAll();
  }
});

window.store = store;

// RENDER
ReactDOM.render(
  ( <Routes store={store}/> ),
  document.getElementById('root')
);
registerServiceWorker();
