import { AppBootstrapDomain } from './domain';
import { SERVICES } from '~/features/Home/constants';
import * as events from './events';
import * as reducers from './reducers';

const initialServices = [...SERVICES];
const initialUser = { user: {}, isAuth: false };

export const $user = AppBootstrapDomain.store(initialUser)
  .on(events.init.done, reducers.setUserData)
  .on(events.login.done, reducers.setUserData);

export const $servicesList = AppBootstrapDomain.store(initialServices).on(
  events.init.done,
  reducers.getServicesDone,
);
