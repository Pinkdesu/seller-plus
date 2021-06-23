import { ProductReportDomain } from './domain';
import * as events from './events';
import { setReport } from '~/features/EmployeeReport/store/reducers';

const initialReport = [];

export const $report = ProductReportDomain.store(initialReport)
  .on(events.getProductReport.doneData, setReport)
  .reset(events.resetReport);
