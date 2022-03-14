import React from 'react';
import { Route, Redirect } from 'react-router-dom';


function PrivateRoute({ children, ...rest }) {
  const token = localStorage.getItem('token');
  console.log("TOKEN", token)
  return (
    <Route
      {...rest}
      render={() => {
        return token ? (
          children
        ) : (
          <Redirect to="/Login" />
        );
      }}
    />
  );
}

export default PrivateRoute;