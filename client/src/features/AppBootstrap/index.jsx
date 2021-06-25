import React, { useEffect, lazy, Suspense } from 'react';
import { useStore } from 'effector-react';
import { getServices, refreshAuth } from './store/events';
import { $isAuth } from './store';
import ls from 'store2';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';
import Sign from './components/Sign';
import Loader from '~/features/Common/Loader';

const RenderAuthorized = lazy(() => import('./components/RenderAuthorized'));

const AppBootstrap = () => {
  const isAuth = useStore($isAuth);

  useEffect(() => {
    if (ls(LOCAL_STORAGE_TOKENS_KEY)) {
      refreshAuth();
    }

    getServices();
  }, []);

  if (!isAuth) {
    return <Sign />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <RenderAuthorized />
    </Suspense>
  );
};

export default AppBootstrap;
