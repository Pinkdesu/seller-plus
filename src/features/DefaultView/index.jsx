import React from 'react';
import * as S from './elements';
import Header from '~/features/Header';

const DefaultView = (props) => {
  const { children } = props;

  return (
    <>
      <S.PageOverflow scroll />
      <S.Wrapper>
        <Header />
        {children}
      </S.Wrapper>
      <S.Shadow />
    </>
  );
};

export default DefaultView;
