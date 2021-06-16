import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';
import Applications from '~/features/Applications';
import AddApplication from '~/features/AddApplication';
import Products from '~/features/Products';
import AddProduct from '~/features/AddProduct';
import AddAct from '~/features/AddAct';
import AddProject from '~/features/AddProject';
import AddPermission from '~/features/AddPermission';
import Clients from '~/features/Clients';

const RenderAuthorized = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/" component={Applications} exact />
        <Route path="/act" component={AddAct} exact />
        <Route path="/project" component={AddProject} exact />
        <Route path="/permission" component={AddPermission} exact />
        <Route path="/application" component={AddApplication} exact />
        <Route path="/clients" component={Clients} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/product" component={AddProduct} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </DefaultView>
  );
};

export default RenderAuthorized;
