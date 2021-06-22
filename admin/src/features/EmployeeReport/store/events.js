import { EmployeeReportDomain } from './domain';
import { ReportController } from '~/api/controllers/ReportController';
import { ApplicationController } from '~/api/controllers/ApplicationController';

export const getEmployeeReport = EmployeeReportDomain.effect().use(
  ReportController.getEmployeeReport,
);

export const getPeriod = EmployeeReportDomain.effect().use(
  ApplicationController.getPeriod,
);

export const resetReport = EmployeeReportDomain.event();
