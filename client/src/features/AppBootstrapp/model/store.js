import { AppBootstrapDomain } from './domain';
import { getServices } from './events';
import { SERVICES } from '~/features/Home/constants';
import { URL } from '~/api/constants';

const initialState = [...SERVICES];

export const $servicesList = AppBootstrapDomain.store(initialState).on(
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
