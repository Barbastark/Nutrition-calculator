
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
//import reducers from './reducers';

// Redux Logger
import createLogger from 'redux-logger';

// React Router
import {Router, Route, IndexRoute, Link, IndexLink, IndexRedirect, hashHistory} from 'react-router';

// Components / Containers
import App from './components/app.js'
 
// Consts
const logger = createLogger();
//const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore);

const app = document.getElementById("app");

ReactDOM.render(
  
    <Router history={hashHistory}>
      <Route path="/" component={App}>
          
      </Route>
    </Router>,
    app

);