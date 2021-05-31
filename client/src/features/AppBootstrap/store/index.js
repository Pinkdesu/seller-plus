import { AppBootstrapDomain } from './domain';
import { SERVICES } from '~/features/Home/constants';
import { combine } from 'effector';
import * as events from './events';
import * as reducers from './reducers';

const initialIsAuth = false;
const initialUserData = {};
const initialServices = [...SERVICES];

export const $isAuth = AppBootstrapDomain.store(initialIsAuth)
  .on(events.setUserData, () => true)
  .reset(events.logOut);

export const $userData = AppBootstrapDomain.store(initialUserData)
  .on(events.setUserData, reducers.setUserData)
  .reset(events.logOut);

export const $user = combine($isAuth, $userData, (isAuth, user) => ({
  isAuth,
  user,
}));

export const $servicesList = AppBootstrapDomain.store(initialServices).on(
  events.getServices.doneData,
  reducers.setServices,
);
