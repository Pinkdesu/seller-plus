import React, { useEffect } from 'react';
import { checkAuth, getServices } from './store/events';
import Sign from './components/Sign';

const AppBootstrap = () => {
  useEffect(() => {
    checkAuth();
    getServices();
  }, []);

  return <Sign />;
};

export default AppBootstrap;
