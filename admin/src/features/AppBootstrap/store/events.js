import { AppBootstrapDomain } from './domain';
import { AppBootstrapController } from '~/api/controllers/AppBootstrapController';

export const login = AppBootstrapDomain.effect().use(
  AppBootstrapController.login,
);

export const getEmployees = AppBootstrapDomain.effect().use(
  AppBootstrapController.getEmployees,
);
