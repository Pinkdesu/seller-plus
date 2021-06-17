import { ApplicationDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialApplications = [];

export const $applications = ApplicationDomain.store(initialApplications)
  .on(events.getApplications.doneData, reducers.setApplications)
  .reset(events.resetApplications);
