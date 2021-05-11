import React from 'react';
import * as S from './elements';
import { useLocation } from 'react-router';
import Header from '~/features/Header';
import Footer from '~/features/Footer';

const DefaultView = (props) => {
  const location = useLocation();

  const { children } = props;

  const headerHiddenFromStart = location.pathname === '/';

  return (
    <>
      <S.PageOverflow scroll />
      <S.Wrapper>
        <Header headerHiddenFromStart={headerHiddenFromStart} />
        {children}
        <Footer />
      </S.Wrapper>
      <S.Shadow />
    </>
  );
};

export default DefaultView;
