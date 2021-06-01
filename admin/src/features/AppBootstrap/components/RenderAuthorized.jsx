import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

const RenderAuthorized = () => {
  return (
    <Switch>
      <Route path="/" component={null} exact />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default RenderAuthorized;
