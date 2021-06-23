import { ClientReportDomain } from './domain';
import * as events from './events';
import * as reducers from '~/features/EmployeeReport/store/reducers';

const initialReport = [];
const initialPeriod = {
  from: '',
  to: '',
};

export const $report = ClientReportDomain.store(initialReport)
  .on(events.getClientReport.doneData, reducers.setReport)
  .reset(events.resetReport);

export const $period = ClientReportDomain.store(initialPeriod)
  .on(events.getPeriod.doneData, reducers.setPeriod)
  .reset(events.resetReport);
