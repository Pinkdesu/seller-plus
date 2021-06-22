import ls from 'store2';
import jwtDecode from 'jwt-decode';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';
import { setToken } from '~/api';

export const login = (_, payload) => {
  const { token } = payload.data;

  const { firstName, secondName, email, phone } = jwtDecode(token);
  ls(LOCAL_STORAGE_TOKENS_KEY, token);
  setToken(token);

  return {
    firstName,
    secondName,
    email,
    phone,
  };
};

export const setEmployees = (_, payload) => {
  const { employees } = payload.data;

  return employees;
};
