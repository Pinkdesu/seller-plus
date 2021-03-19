import React from 'react';
import Footer from '~/features/Footer';
import './style.scss';

const DefaultView = (props) => {
  const { children, footer = true } = props;

  return (
    <div className="wrapper">
      {children}
      {footer && <Footer />}
    </div>
  );
};

export default DefaultView;
