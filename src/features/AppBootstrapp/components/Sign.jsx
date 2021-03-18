import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '~/features/Login';
import Register from '~/features/Register';
import DefaultView from '../../DefaultView';

const Sign = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/registration" component={Register} exact />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
