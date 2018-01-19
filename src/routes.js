import React from "react";
import PropTypes from "prop-types";
import {Provider} from "react-redux"
// import {Route, Router} from "react-router";
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {syncHistoryWithStore} from "react-router-redux";
// CONTAINERS
import AppContainer from "./containers/AppContainer";
import ChildContainer from "./containers/ChildContainer";

const Routes = ({store}) => {
  // const history = syncHistoryWithStore(createBrowserHistory, store);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={AppContainer}/>
          <Route  path="/child" component={ChildContainer}/>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

Routes.propTypes = {
  store: PropTypes.object.isRequired
};

export default Routes;