import React, { useEffect } from 'react';
import { refreshAuth, getServices } from './store/events';
import Sign from './components/Sign';

const AppBootstrap = () => {
  useEffect(() => {
    refreshAuth();
    getServices();
  }, []);

  return <Sign />;
};

export default AppBootstrap;
