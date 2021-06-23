import { ReportDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialReport = [];
const initialPeriod = {
  from: '',
  to: '',
};

export const $report = ReportDomain.store(initialReport)
  .on(
    [
      events.getEmployeeReport.doneData,
      events.getProductReport.doneData,
      events.getClientReport.doneData,
      events.getDistrictReport.doneData,
    ],
    reducers.setReport,
  )
  .reset(events.resetReport);

export const $period = ReportDomain.store(initialPeriod)
  .on(events.getPeriod.doneData, reducers.setPeriod)
  .reset(events.resetReport);
