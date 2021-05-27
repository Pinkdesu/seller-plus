import React from 'react';
import * as S from './elements';
import AccountNav from './components/AccountNav';
import Content from './components/Content';

const Account = () => {
  return (
    <S.AccountMain>
      <S.AccountContentWrapper>
        <AccountNav />
        <Content />
      </S.AccountContentWrapper>
    </S.AccountMain>
  );
};

export default Account;
