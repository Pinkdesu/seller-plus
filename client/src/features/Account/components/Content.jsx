import React from 'react';
import { useLocation } from 'react-router';
import * as S from '../elements';
import Personal from './Personal';

const VIEWS = {
  account: Personal,
};

const Content = () => {
  const { pathname } = useLocation();

  const index = pathname.lastIndexOf('/');
  const pageName = pathname.substring(index + 1);

  const PageContent = VIEWS[pageName];

  return (
    <S.Content>
      <S.ContentLayout>
        <PageContent />
      </S.ContentLayout>
    </S.Content>
  );
};

export default Content;
