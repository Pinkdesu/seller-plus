import { EmployeeReportDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialReport = [];
const initialPeriod = {
  from: '',
  to: '',
};

export const $report = EmployeeReportDomain.store(initialReport)
  .on(events.getEmployeeReport.doneData, reducers.setReport)
  .reset(events.resetReport);

export const $period = EmployeeReportDomain.store(initialPeriod)
  .on(events.getPeriod.doneData, reducers.setPeriod)
  .reset(events.resetReport);
