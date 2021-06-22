import { ClientReportDomain } from './domain';
import { ReportController } from '~/api/controllers/ReportController';
import { ApplicationController } from '~/api/controllers/ApplicationController';

export const getClientReport = ClientReportDomain.effect().use(
  ReportController.getClientReport,
);

export const getPeriod = ClientReportDomain.effect().use(
  ApplicationController.getPeriod,
);

export const resetReport = ClientReportDomain.event();
