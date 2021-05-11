import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';
import Home from '~/features/Home';
import Shop from '~/features/Shop';
import ShopCategory from '~/features/ShopCategory';
import ProductPage from '~/features/ProductPage';

const Sign = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} exact />
        <Route path="/shop/category/:id" component={ShopCategory} exact />
        <Route path="/shop/product/:id" component={ProductPage} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default Sign;
