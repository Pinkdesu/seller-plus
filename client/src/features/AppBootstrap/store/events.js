import { AppBootstrapDomain } from './domain';
import { AppBootstrapController } from '~/api/controllers/AppBootstrapController';
import ls from 'store2';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';

export const init = AppBootstrapDomain.effect().use(
  AppBootstrapController.init,
);

export const login = AppBootstrapDomain.effect().use(
  AppBootstrapController.login,
);

export const register = AppBootstrapDomain.effect().use(
  AppBootstrapController.register,
);

export const checkAuth = AppBootstrapDomain.effect().use(
  AppBootstrapController.checkAuth,
);

export const updateUser = AppBootstrapDomain.effect().use(
  AppBootstrapController.updateUser,
);

export const getServices = AppBootstrapDomain.effect().use(
  AppBootstrapController.getServices,
);

export const logOut = AppBootstrapDomain.event();

export const clearLocalStorage = logOut.map(() =>
  ls.remove(LOCAL_STORAGE_TOKENS_KEY),
);
