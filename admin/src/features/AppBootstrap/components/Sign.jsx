import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPage from '~/features/LoginPage';

const Sign = () => {
  return (
    <Switch>
      <Route path="/" component={LoginPage} exact />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Sign;
