import { AppBootstrapDomain } from './domain';
import { SERVICES } from '~/features/Home/constants';
import * as events from './events';
import * as reducers from './reducers';

const initialServices = [...SERVICES];
const initialUser = { user: {}, isAuth: false };

export const $user = AppBootstrapDomain.store(initialUser)
  .on(
    [
      events.init.done,
      events.login.done,
      events.register.done,
      events.updateUser.done,
    ],
    reducers.setUserData,
  )
  .reset(events.logOut);

export const $servicesList = AppBootstrapDomain.store(initialServices).on(
  events.init.done,
  reducers.getServicesDone,
);
