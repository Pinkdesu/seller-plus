import ls from 'store2';
import jwtDecode from 'jwt-decode';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';
import { URL } from '~/api/constants';

export const setUserData = (_, result) => {
  const { token } = result.data;

  const { firstName, secondName, email, phone } = jwtDecode(token);
  ls(LOCAL_STORAGE_TOKENS_KEY, token);

  return {
    firstName,
    secondName,
    email,
    phone,
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
