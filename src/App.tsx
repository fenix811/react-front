import React from 'react';
import './App.css';

import { Route, Switch, BrowserRouter as Router, Link, withRouter, Redirect  } from 'react-router-dom';
import ClientApp from './components/Containers/client/ClientApp';
import { AdminApp } from './components/Containers/admin/AdminApp';
import { AuthService } from './services/AuthService';
import Login from './components/Login/Login';
import ClientApp1 from './components/Containers/client/ClientApp1';
import PrivateRoute from './HOC/PrivateRoute';



function App() {
  return (
      <Switch>
        {/* <Route exact={true} path="/" component={ClientApp} /> */}
        <Route exact={true} path="/" component={ClientApp1} />
        <PrivateRoute path='/admin' component={AdminApp} />
        <Route path='/login' component={Login} />
      </Switch>
    );
}

export default App;
