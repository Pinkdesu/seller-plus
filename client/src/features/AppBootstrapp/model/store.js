import { AppBootstrapDomain } from './domain';
import { getServices } from './events';
import { SERVICES, SLIDES_INFO } from '~/features/Home/constants';

const initialState = [...SERVICES];

export const $servicesList = AppBootstrapDomain.store(
  initialState,
).on(getServices.done, (_, { result }) => [...SLIDES_INFO]);
