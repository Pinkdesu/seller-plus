import { ProductReportDomain } from './domain';
import { ReportController } from '~/api/controllers/ReportController';

export const getProductReport = ProductReportDomain.effect().use(
  ReportController.getProductReport,
);

export const resetReport = ProductReportDomain.event();
