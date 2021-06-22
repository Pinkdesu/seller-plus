import { ApplicationDomain } from './domain';
import { ApplicationController } from '~/api/controllers/ApplicationController';
import { AppStatusController } from '~/api/controllers/AppStatusController';

export const getApplications = ApplicationDomain.effect().use(
  ApplicationController.getApplications,
);

export const getSearchApplications = ApplicationDomain.effect().use(
  ApplicationController.getApplications,
);

export const getStatuses = ApplicationDomain.effect().use(
  AppStatusController.getStatuses,
);

export const resetApplications = ApplicationDomain.event();
