import React from 'react';
import { useStore } from 'effector-react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { $user } from '../model/store';
import DefaultView from '~/features/DefaultView';
import Home from '~/features/Home';
import Shop from '~/features/Shop';
import CategoryPage from '~/features/CategoryPage';
import ProductPage from '~/features/ProductPage';
import Basket from '~/features/Basket';
import Login from '~/features/Login';
import Register from '~/features/Register';
import Account from '~/features/Account';

const Sign = () => {
  const user = useStore($user);

  const { isAuth } = user;

  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/basket" component={Basket} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/shop/category/:id" component={CategoryPage} exact />
        <Route path="/shop/product/:id" component={ProductPage} exact />
        {isAuth ? (
          <Route path="/account" component={Account} exact />
        ) : (
          <Route>
            <Route path="/account/login" component={Login} exact />
            <Route path="/account/register" component={Register} exact />
          </Route>
        )}
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
