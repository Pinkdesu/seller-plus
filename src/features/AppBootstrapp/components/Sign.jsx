import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '~/features/Login';
import Register from '~/features/Register';
import Shop from '~/features/Shop';
import DefaultView from '../../DefaultView';

const Sign = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/registration" component={Register} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/rating" component={Login} exact />
        <Route path="/task" component={Login} exact />
        <Route path="/profile" component={Login} exact />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
