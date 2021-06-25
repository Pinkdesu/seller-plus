import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';
import Login from '~/features/Login';
import Register from '~/features/Register';
import Home from '~/features/Home';
import Shop from '~/features/Shop';
import CategoryPage from '~/features/CategoryPage';
import ProductPage from '~/features/ProductPage';
import Basket from '~/features/Basket';
import ServicesPage from '~/features/ServicesPage';
import SearchPage from '~/features/SearchPage';

//TODO: coomon routes

const Sign = () => {
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

        <Route path="/account/login" component={Login} exact />
        <Route path="/account/register" component={Register} exact />

        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
