import React, { useEffect } from 'react';
import { getServices, refreshAuth } from './store/events';
import ls from 'store2';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';
import Sign from './components/Sign';

const AppBootstrap = () => {
  useEffect(() => {
    if (ls(LOCAL_STORAGE_TOKENS_KEY)) {
      refreshAuth();
    }

    getServices();
  }, []);

  return <Sign />;
};

export default AppBootstrap;
