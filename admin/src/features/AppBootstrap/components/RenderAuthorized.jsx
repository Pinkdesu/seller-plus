import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import DefaultView from '~/features/DefaultView';
import Applications from '~/features/Applications';
import AddApplication from '~/features/AddApplication';
import Products from '~/features/Products';
import AddProduct from '~/features/AddProduct';
import Acts from '~/features/Acts';
import AddAct from '~/features/AddAct';
import AddProject from '~/features/AddProject';
import AddPermission from '~/features/AddPermission';
import Clients from '~/features/Clients';
import AddClient from '~/features/AddClient';

const RenderAuthorized = () => {
  return (
    <DefaultView>
      <Switch>
        <Route path="/act" component={AddAct} exact />
        <Route path="/acts" component={Acts} exact />
        <Route path="/project" component={AddProject} exact />
        <Route path="/permission" component={AddPermission} exact />
        <Route path="/application" component={AddApplication} exact />
        <Route path="/applications" component={Applications} exact />
        <Route path="/client" component={AddClient} exact />
        <Route path="/clients" component={Clients} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/product" component={AddProduct} exact />
        <Redirect from="*" to="/applications" />
      </Switch>
    </DefaultView>
  );
};

export default RenderAuthorized;
