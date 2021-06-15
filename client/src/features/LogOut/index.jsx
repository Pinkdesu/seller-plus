import React, { useEffect } from 'react';
import { logout } from '~/features/AppBootstrap/store/events';
import { Redirect } from 'react-router-dom';

const Logout = () => {
  useEffect(() => logout(), []);

  return <Redirect to="/account/login" />;
};

export default Logout;
