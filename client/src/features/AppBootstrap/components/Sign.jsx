import React from 'react';
import { useStore } from 'effector-react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { $user } from '../store';
import PrivateRoute from './PrivateRoute';
import DefaultView from '~/features/DefaultView';
import Home from '~/features/Home';
import Shop from '~/features/Shop';
import CategoryPage from '~/features/CategoryPage';
import ProductPage from '~/features/ProductPage';
import Basket from '~/features/Basket';
import Login from '~/features/Login';
import Register from '~/features/Register';
import Account from '~/features/Account';
import LogOut from '~/features/LogOut';

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

        <PrivateRoute
          path={['/account', '/account/change-password']}
          redirectTo="/account/login"
          component={Account}
          authed={isAuth}
          exact
        />

        <PrivateRoute
          path="/account/login"
          redirectTo="/account"
          component={Login}
          authed={!isAuth}
          exact
        />

        <PrivateRoute
          path="/account/register"
          redirectTo="/account"
          component={Register}
          authed={!isAuth}
          exact
        />

        <PrivateRoute
          path="/account/log-out"
          redirectTo="/account/login"
          authed={isAuth}
          component={LogOut}
          exact
        />

        <Redirect from="/account" to="/account" />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
