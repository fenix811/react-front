import React from 'react';
import './App.css';

import { Route, Switch, BrowserRouter as Router, Link, withRouter, Redirect  } from 'react-router-dom';
import ClientApp from './components/Containers/client/ClientApp';
import { AdminApp } from './components/Containers/AdminApp';
import { AuthService } from './services/AuthService';
import { Login } from './components/Login/Login';


const PrivateRoute = ({ component: Component, ...rest }: any) => (  //My HOC
  <Route {...rest} render={(props) => (
    AuthService.isAuth() === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

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
