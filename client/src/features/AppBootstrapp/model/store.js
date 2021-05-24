import { AppBootstrapDomain } from './domain';
import { SERVICES } from '~/features/Home/constants';
import { URL } from '~/api/constants';
import { getServices, login } from './events';

const initialServices = [...SERVICES];
const initialUser = { user: {}, isAuth: false };

export const $user = AppBootstrapDomain.store(initialUser).on(
  login.done,
  (_, { result }) => {
    const { data } = result.data;
    const { token, user } = data;

    return {
      user,
      token,
      isAuth: true,
    };
  },
);

export const $servicesList = AppBootstrapDomain.store(initialServices).on(
  getServices.done,
  (_, { result }) => {
    const { data } = result.data;

    return [
      ...data.map((item) => ({
        ...item,
        title: item.name,
        description: item.title,
        image: URL(`/${item.image}`),
      })),
    ];
  },
);
