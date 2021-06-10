import React from 'react';
import { useLocation } from 'react-router';
import { PAGE_HEADERS } from '../constants';
import * as S from '../elements';
import ContentHeader from './ContentHeader';
import Personal from './Personal';
import ChangePassword from './ChangePassword';
import OrdersPage from './OrdersPage';
import OrderPage from './OrderPage';
import AddressPage from './AddressPage';

const VIEWS = {
  account: Personal,
  address: AddressPage,
  'change-password': ChangePassword,
  orders: OrdersPage,
  order: OrderPage,
};

const Content = () => {
  const { pathname } = useLocation();

  const paths = pathname.split('/');
  const pageName = paths.length === 2 ? paths[1] : paths[2];

  const header = PAGE_HEADERS[pageName];
  const PageContent = VIEWS[pageName];

  return (
    <S.Content>
      <S.ContentLayout>
        <ContentHeader
          title={header?.title}
          text={header?.text}
          image={header?.image}
        />
        <PageContent />
      </S.ContentLayout>
    </S.Content>
  );
};

export default Content;
