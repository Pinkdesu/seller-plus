import React, { useEffect } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { getBrands, getCategories } from '~/features/Products/store/events';
import { getEmployees } from '../store/events';
import DefaultView from '~/features/DefaultView';
import Applications from '~/features/Applications';
import AddApplication from '~/features/AddApplication';
import Products from '~/features/Products';
import AddProduct from '~/features/AddProduct';
import Acts from '~/features/Acts';
import AddAct from '~/features/AddAct';
import Clients from '~/features/Clients';
import AddClient from '~/features/AddClient';
import Permissions from '~/features/Permissions';
import AddPermission from '~/features/AddPermission';
import Projects from '~/features/Projects';
import AddProject from '~/features/AddProject';
import Contracts from '~/features/Contracts';
import AddContract from '~/features/AddContract';

const RenderAuthorized = () => {
  useEffect(() => {
    getBrands();
    getCategories();
    getEmployees();
  }, []);

  return (
    <DefaultView>
      <Switch>
        <Route path="/act" component={AddAct} exact />
        <Route path="/acts" component={Acts} exact />
        <Route path="/project" component={AddProject} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/application" component={AddApplication} exact />
        <Route path="/applications" component={Applications} exact />
        <Route path="/client" component={AddClient} exact />
        <Route path="/clients" component={Clients} exact />
        <Route path="/product" component={AddProduct} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/permission" component={AddPermission} exact />
        <Route path="/permissions" component={Permissions} exact />
        <Route path="/contract" component={AddContract} exact />
        <Route path="/contracts" component={Contracts} exact />
        <Redirect from="*" to="/applications" />
      </Switch>
    </DefaultView>
  );
};

export default RenderAuthorized;
