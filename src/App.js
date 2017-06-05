import React, { Component } from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Logout from './pages/logout';
import Create from './pages/create';
import NotFound from './pages/notFound';
import AppForm from './AppForm';
import Navigation from "./Navigation";

import logo from './logo.svg';
import './css/App.css';
import './css/index.css';

class App extends Component {

  render() {

    return (      
        <div className="container">
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apply" component={AppForm} />
          <Route exact path="/rr" component={NotFound} />
          <Route exact path="/login" component={Login} />
          <Route path="logout" component={Logout} />
          <Route exact path="/create" component={Create} />
          <Route component={NotFound} />
          </Switch>
        </div>     
    );
  }
}

export default App;
