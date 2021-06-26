import { ReportDomain } from './domain';
import { ReportController } from '~/api/controllers/ReportController';
import { ApplicationController } from '~/api/controllers/ApplicationController';
import { OrderController } from '~/api/controllers/OrderController';
import { InvoiceController } from '~/api/controllers/InvoiceController';

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

export const getAppCountReport = ReportDomain.effect().use(
  ReportController.getAppCountReport,
);

export const getOrderReport = ReportDomain.effect().use(
  ReportController.getOrderReport,
);

export const getUserReport = ReportDomain.effect().use(
  ReportController.getUserReport,
);

export const getAverageCheckReport = ReportDomain.effect().use(
  ReportController.getAverageCheckReport,
);

export const getInvoiceReport = ReportDomain.effect().use(
  ReportController.getInvoiceReport,
);

export const getPeriod = ReportDomain.effect().use(
  ApplicationController.getPeriod,
);

export const getOrderPeriod = ReportDomain.effect().use(
  OrderController.getPeriod,
);

export const getInvoicePeriod = ReportDomain.effect().use(
  InvoiceController.getPeriod,
);

export const resetReport = ReportDomain.event();
