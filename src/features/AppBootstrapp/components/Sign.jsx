import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '~/features/Login';
import DefaultView from '../../DefaultView';

const Sign = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Login} exact />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
