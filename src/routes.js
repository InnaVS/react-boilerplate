import React from "react";
import PropTypes from "prop-types";
import {Provider} from "react-redux"
// import {Route, Router} from "react-router";
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {syncHistoryWithStore} from "react-router-redux";
// CONTAINERS
import AppContainer from "./containers/AppContainer";

const Routes = ({store}) => {
  // const history = syncHistoryWithStore(createBrowserHistory, store);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" exact component={AppContainer}>
        </Route>
      </BrowserRouter>
    </Provider>
  );
};

Routes.propTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;