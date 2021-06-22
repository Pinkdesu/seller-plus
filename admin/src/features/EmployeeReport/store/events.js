import { EmployeeReportDomain } from './domain';
import { ReportController } from '~/api/controllers/ReportController';

export const getEmployeeReport = EmployeeReportDomain.effect().use(
  ReportController.getEmployeeReport,
);

export const reset = EmployeeReportDomain.event();
