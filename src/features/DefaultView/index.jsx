import React from 'react';
import { Wrapper } from './elements';
import Header from '~/features/Header';

const DefaultView = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default DefaultView;
