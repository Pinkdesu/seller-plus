import React, { lazy, Suspense } from 'react';
import { useStore } from 'effector-react';
import { $isAuth } from './store';
import Sign from './components/Sign';

const RenderAuthorized = lazy(() => import('./components/RenderAuthorized'));

const AppBootstrap = () => {
  const isAuth = useStore($isAuth);

  if (!isAuth) {
    return <Sign />;
  }

  return (
    <Suspense fallback={null}>
      <RenderAuthorized />
    </Suspense>
  );
};

export default AppBootstrap;
