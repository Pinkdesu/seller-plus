import React from 'react';
import './style.scss';

const DefaultView = (props) => {
  const { children } = props;

  return <div className="wrapper">{children}</div>;
};

export default DefaultView;
