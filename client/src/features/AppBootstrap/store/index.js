import { AppBootstrapDomain } from './domain';
import { SERVICES } from '~/features/Home/constants';
import { combine } from 'effector';
import * as events from './events';
import * as reducers from './reducers';

const initialIsAuth = false;
const initialUserData = {};
const initialServices = [...SERVICES];

export const $isAuth = AppBootstrapDomain.store(initialIsAuth)
  .on(events.auth, () => true)
  .reset(events.logout.done);

export const $userData = AppBootstrapDomain.store(initialUserData)
  .on([events.auth, events.changeUserData], reducers.setUserData)
  .reset(events.logout.done);

export const $isAddress = $userData.map((state) => Boolean(state?.address));

export const $user = combine($isAuth, $userData, (isAuth, user) => ({
  isAuth,
  user,
}));

export const $servicesList = AppBootstrapDomain.store(initialServices).on(
  events.getServices.doneData,
  reducers.setServices,
);
