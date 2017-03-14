
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

// Redux Logger
import createLogger from 'redux-logger';

// React Router
import {Router, Route, IndexRoute, IndexRedirect, hashHistory} from 'react-router';

// Components / Containers
import App from './containers/app.js';
import Home from './components/home.js';
import Calculator from './components/calculator.js';
import CalculatedResults from './containers/calculator_containers/calculated_results.js';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const app = document.querySelector('#app');

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
	    <Router history={hashHistory}>
	      <Route path="/" component={App}>
	         <IndexRoute component={Home} /> 
	         <Route path="calculator" component={Calculator} />
	         <Route path="calculatedresults" component={CalculatedResults} />
	      </Route>
	    </Router>
    </Provider>,
    app
);