import ls from 'store2';
import { AppBootstrapDomain } from './domain';
import { AppBootstrapController } from '~/api/controllers/AppBootstrapController';
import { merge } from 'effector';
import { LOCAL_STORAGE_TOKENS_KEY } from '~/api/constants';

export const login = AppBootstrapDomain.effect().use(
  AppBootstrapController.login,
);

export const register = AppBootstrapDomain.effect().use(
  AppBootstrapController.register,
);

export const refreshAuth = AppBootstrapDomain.effect().use(
  AppBootstrapController.refreshAuth,
);

export const updateUser = AppBootstrapDomain.effect().use(
  AppBootstrapController.updateUser,
);

export const changePassword = AppBootstrapDomain.effect().use(
  AppBootstrapController.changePassword,
);

export const getServices = AppBootstrapDomain.effect().use(
  AppBootstrapController.getServices,
);

export const auth = merge([
  login.doneData,
  register.doneData,
  refreshAuth.doneData,
]);

export const changeUserData = merge([
  updateUser.doneData,
  changePassword.doneData,
]);

export const logout = AppBootstrapDomain.effect().use(
  AppBootstrapController.logout,
);

export const clearLocalStorage = logout.map(() =>
  ls.remove(LOCAL_STORAGE_TOKENS_KEY),
);
