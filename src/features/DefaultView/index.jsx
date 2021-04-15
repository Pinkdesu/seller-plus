import React from 'react';

const DefaultView = (props) => {
  const { children } = props;

  return <div className="wrapper">{children}</div>;
};

export default DefaultView;
