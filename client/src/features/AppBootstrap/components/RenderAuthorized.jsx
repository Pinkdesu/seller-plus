import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';
import Account from '~/features/Account';
import LogOut from '~/features/LogOut';

const RenderAuthorized = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/account" component={Account} exact />
        <Route path="/account/log-out" component={LogOut} exact />

        <Redirect from="/account" to="/account" />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default RenderAuthorized;
