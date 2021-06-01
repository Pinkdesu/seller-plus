import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';

const RenderAuthorized = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={null} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default RenderAuthorized;
