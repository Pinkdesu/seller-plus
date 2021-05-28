import React, { useEffect } from 'react';
import { logOut } from '~/features/AppBootstrap/store/events';
import { Redirect } from 'react-router-dom';

const LogOut = () => {
  useEffect(() => logOut(), []);

  return <Redirect to="/account/login" />;
};

export default LogOut;
