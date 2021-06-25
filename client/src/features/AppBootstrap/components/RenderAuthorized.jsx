import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useStore } from 'effector-react';
import { $userData } from '../store';
import DefaultView from '~/features/DefaultView';
import Account from '~/features/Account';
import LogOut from '~/features/LogOut';
import PaymentPage from '~/features/PaymentPage';
import PaymentSuccess from '~/features/PaymentSuccess';
import Home from '~/features/Home';
import Shop from '~/features/Shop';
import CategoryPage from '~/features/CategoryPage';
import ProductPage from '~/features/ProductPage';
import Basket from '~/features/Basket';
import ServicesPage from '~/features/ServicesPage';
import SearchPage from '~/features/SearchPage';
import PrivateRoute from './PrivateRoute';
import ActivatedPage from '~/features/ActivatedPage';

const RenderAuthorized = () => {
  const { isActivated } = useStore($userData);

  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/basket" component={Basket} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/services" component={ServicesPage} exact />
        <Route path="/shop/search" component={SearchPage} exact />
        <Route path="/shop/category/:id" component={CategoryPage} exact />
        <Route path="/shop/product/:id" component={ProductPage} exact />

        <Route path="/account/log-out" component={LogOut} exact />
        <Route
          path={[
            '/account',
            '/account/address',
            '/account/change-password',
            '/account/orders',
            '/account/order/:id',
          ]}
          component={Account}
          exact
        />

        <PrivateRoute
          path="/activate"
          redirectTo="/account"
          authed={!isActivated}
          component={ActivatedPage}
          exact
        />

        <PrivateRoute
          path="/payment"
          redirectTo="/activate"
          authed={isActivated}
          component={PaymentPage}
          exact
        />

        <PrivateRoute
          path="/payment/success"
          redirectTo="/activate"
          authed={isActivated}
          component={PaymentSuccess}
          exact
        />

        <Redirect from="/account" to="/account" />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default RenderAuthorized;
