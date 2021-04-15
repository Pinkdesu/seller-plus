import React from 'react';
import { Wrapper } from './index.elements';

const DefaultView = (props) => {
  const { children } = props;

  return <Wrapper>{children}</Wrapper>;
};

export default DefaultView;
