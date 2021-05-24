import { AppBootstrapDomain } from './domain';
import { AppBootstrapController } from '~/api/controllers/AppBootstrapController';

export const getServices = AppBootstrapDomain.effect().use(
  AppBootstrapController.getServices,
);

export const login = AppBootstrapDomain.effect().use(
  AppBootstrapController.login,
);
