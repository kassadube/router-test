import React from 'react';
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { HashRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';
import registerReducer from "./store/reducers/register";

import App from './App';
import store, {history} from './store';
//const history = createHistory();
//const middleware = routerMiddleware(history);



//const reducers = combineReducers({ register: registerReducer, router: routerReducer });
//const store = createStore(reducers, composeWithDevTools(applyMiddleware(middleware, thunk)));

ReactDOM.render(

  <Provider store={store}>
    <HashRouter history={history}>
      <div>
        <App />
      </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
