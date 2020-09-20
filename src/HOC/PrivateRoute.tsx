import React from "react";
import { Route, Redirect } from "react-router";
import { AuthService } from "../services/AuthService";

const PrivateRoute = ({ component: Component, ...rest }: any) => (  //My HOC
    <Route {...rest} render={(props) => (
      AuthService.isAuth() === true
        ? <Component {...props} />
        : <Redirect to='/login' />
    )} />
  )

  export default PrivateRoute;
  