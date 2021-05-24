import { AppBootstrapDomain } from './domain';
import { AppBootstrapController } from '~/api/controllers/AppBootstrapController';

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

export const getServices = AppBootstrapDomain.effect().use(
  AppBootstrapController.getServices,
);
