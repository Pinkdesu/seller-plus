import { AppBootstrapDomain } from './domain';
import { combine } from 'effector';
import * as events from './events';
import * as reducers from './reducers';

const initialIsAuth = false;
const initialUserData = {};
const initialEmployees = [];

export const $isAuth = AppBootstrapDomain.store(initialIsAuth).on(
  events.login.doneData,
  () => true,
);

export const $userData = AppBootstrapDomain.store(initialUserData).on(
  events.login.doneData,
  reducers.login,
);

export const $employees = AppBootstrapDomain.store(initialEmployees).on(
  events.getEmployees.doneData,
  reducers.setEmployees,
);

export const $user = combine($isAuth, $userData, (isAuth, user) => ({
  isAuth,
  user,
}));
