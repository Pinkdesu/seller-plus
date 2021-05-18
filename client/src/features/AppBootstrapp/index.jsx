import React, { useEffect } from 'react';
import { getServices } from './model/events';
import Sign from './components/Sign';

const AppBootstrap = () => {
  useEffect(() => {
    getServices();
  }, []);

  return <Sign />;
};

export default AppBootstrap;
