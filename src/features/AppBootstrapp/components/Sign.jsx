import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';
import Home from '~/features/Home';
import Shop from '~/features/Shop';

const Sign = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
