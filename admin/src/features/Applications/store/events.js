import { ApplicationDomain } from './domain';
import { ApplicationController } from '~/api/controllers/ApplicationController';

export const getApplications = ApplicationDomain.effect().use(
  ApplicationController.getApplications,
);

export const resetApplications = ApplicationDomain.event();
