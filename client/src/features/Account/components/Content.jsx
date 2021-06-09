import React from 'react';
import { useLocation } from 'react-router';
import { PAGE_HEADERS } from '../constants';
import * as S from '../elements';
import ContentHeader from './ContentHeader';
import Personal from './Personal';
import ChangePassword from './ChangePassword';
import Orders from './Orders';

const VIEWS = {
  account: Personal,
  'change-password': ChangePassword,
  orders: Orders,
};

const Content = () => {
  const { pathname } = useLocation();

  const index = pathname.lastIndexOf('/');
  const pageName = pathname.substring(index + 1);

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
