import ls from 'store2';
import jwtDecode from 'jwt-decode';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';

export const setUserData = (_, { result }) => {
  const { token } = result;
  const user = jwtDecode(token);
  ls(LOCAL_STORAGE_TOKENS_KEY, token);

  return {
    user,
    isAuth: true,
  };
};

export const getServicesDone = (_, { result }) => {
  const { services } = result;
  return services;
};
