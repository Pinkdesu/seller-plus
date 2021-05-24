import React, { useEffect } from 'react';
import { init } from './model/events';
import Sign from './components/Sign';

const AppBootstrap = () => {
  useEffect(() => {
    init();
  }, []);

  return <Sign />;
};

export default AppBootstrap;
