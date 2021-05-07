import React from 'react';
import * as S from './elements';
import { useLocation } from 'react-router';
import { LOCATIONS_WITHOUT_TOP_HEADER } from './constants';
import Header from '~/features/Header';
import Footer from '~/features/Footer';

const DefaultView = (props) => {
  const location = useLocation();

  const { children } = props;

  const defaultTop = LOCATIONS_WITHOUT_TOP_HEADER.includes(location.pathname);

  return (
    <>
      <S.PageOverflow scroll />
      <S.Wrapper>
        <Header defaultTop={defaultTop} />
        {children}
        <Footer />
      </S.Wrapper>
      <S.Shadow />
    </>
  );
};

export default DefaultView;
