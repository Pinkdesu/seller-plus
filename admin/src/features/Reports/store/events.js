import { ReportDomain } from './domain';
import { ReportController } from '~/api/controllers/ReportController';
import { ApplicationController } from '~/api/controllers/ApplicationController';

export const getEmployeeReport = ReportDomain.effect().use(
  ReportController.getEmployeeReport,
);

export const getProductReport = ReportDomain.effect().use(
  ReportController.getProductReport,
);

export const getClientReport = ReportDomain.effect().use(
  ReportController.getClientReport,
);

export const getDistrictReport = ReportDomain.effect().use(
  ReportController.getDistrictReport,
);

export const getPeriod = ReportDomain.effect().use(
  ApplicationController.getPeriod,
);

export const resetReport = ReportDomain.event();
