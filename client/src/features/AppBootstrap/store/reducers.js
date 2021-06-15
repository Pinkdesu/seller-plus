import ls from 'store2';
import { LOCAL_STORAGE_TOKENS_KEY, URL } from '~/api/constants';
import { setToken } from '~/api';

export const setUserData = (_, result) => {
  const { user, accessToken } = result.data;

  ls(LOCAL_STORAGE_TOKENS_KEY, accessToken);
  setToken(accessToken);

  return {
    ...user,
    accessToken,
  };
};

export const setServices = (state, result) => {
  const { services } = result.data;

  if (!services.length) return state;

  return services.map((service) => ({
    ...service,
    image: URL(service.image),
  }));
};
