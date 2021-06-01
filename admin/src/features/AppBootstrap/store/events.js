import { AppBootstrapDomain } from './domain';
import { AppBootstrapController } from '~/api/controllers/AppBootstrapController';

export const login = AppBootstrapDomain.effect().use(
  AppBootstrapController.login,
);
