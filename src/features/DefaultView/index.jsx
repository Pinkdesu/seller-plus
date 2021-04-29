import React from 'react';
import * as S from './elements';
import Header from '~/features/Header';
import Footer from '~/features/Footer';

const DefaultView = (props) => {
  const { children } = props;

  return (
    <>
      <S.PageOverflow scroll />
      <S.Wrapper>
        <Header />
        {children}
        <Footer />
      </S.Wrapper>
      <S.Shadow />
    </>
  );
};

export default DefaultView;
