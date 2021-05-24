import ls from 'store2';
import { LOCAL_STORAGE_TOKENS_KEY, URL } from '~/api/constants';

export const loginSuccess = (_, { result }) => {
  const { data } = result.data;
  const { token, user } = data;

  ls(LOCAL_STORAGE_TOKENS_KEY, { token });

  return {
    user,
    token,
    isAuth: true,
  };
};

export const getServicesSuccess = (_, { result }) => {
  const { data } = result.data;

  return [
    ...data.map((item) => ({
      ...item,
      title: item.name,
      description: item.title,
      image: URL(`/${item.image}`),
    })),
  ];
};
