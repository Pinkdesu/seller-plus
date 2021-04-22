import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';
import Home from '~/features/Home';

const Sign = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
