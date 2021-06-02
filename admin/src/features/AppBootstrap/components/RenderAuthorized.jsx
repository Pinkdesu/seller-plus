import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';
import Applications from '~/features/Applications';
import AddApplication from '~/features/AddApplication';

const RenderAuthorized = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Applications} exact />
        <Route path="/application" component={AddApplication} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default RenderAuthorized;
