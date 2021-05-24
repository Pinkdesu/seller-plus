import { AppBootstrapDomain } from './domain';
import { SERVICES } from '~/features/Home/constants';
import * as events from './events';
import * as handlers from './handlers';

const initialServices = [...SERVICES];
const initialUser = { user: {}, isAuth: false };

export const $user = AppBootstrapDomain.store(initialUser).on(
  events.login.done,
  handlers.loginSuccess,
);

export const $servicesList = AppBootstrapDomain.store(initialServices).on(
  events.getServices.done,
  handlers.getServicesSuccess,
);
