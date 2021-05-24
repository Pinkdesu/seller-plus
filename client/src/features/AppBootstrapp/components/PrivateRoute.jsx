import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { component: Component, authed, redirectTo, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (authed) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{ pathname: redirectTo, state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
