import React from 'react';
import './App.css';

import { Route, Switch, BrowserRouter as Router, Link, withRouter, Redirect  } from 'react-router-dom';
import ClientApp from './components/Containers/client/ClientApp';
import { AdminApp } from './components/Containers/admin/AdminApp';
import Login from './components/Login/Login';
import PrivateRoute from './HOC/PrivateRoute';

function App() {
  return (
      <Switch>
        <Route exact={true} path="/" component={ClientApp} />
        <PrivateRoute path='/admin' component={AdminApp} />
        <Route path='/login' component={Login} />
      </Switch>
    );
}

export default App;
