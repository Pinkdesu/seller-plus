import { AppBootstrapDomain } from './domain';
import { getServices } from './events';
import { SERVICES } from '~/features/Home/constants';
import { URL } from '~/api/constants';

const initialState = [...SERVICES];

export const $servicesList = AppBootstrapDomain.store(
  initialState,
).on(getServices.done, (_, { result }) => [
  ...result.map((item) => ({ ...item, image: URL(`/static/${item.image}`) })),
]);
