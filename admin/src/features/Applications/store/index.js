import { ApplicationDomain } from './domain';
import { combine } from 'effector';
import * as events from './events';
import * as reducers from './reducers';
import {
  setPagesCount,
  increasePageNumber,
  reducePageNumber,
} from '~/features/Products/store/reducers';

const initialStatuses = [];
const initialApplications = [];

const initialPagesCount = 1;
const initialPageNumber = 1;

export const $applications = ApplicationDomain.store(initialApplications)
  .on(events.getApplications.doneData, reducers.setApplications)
  .on(events.getSearchApplications.doneData, reducers.setSearchApplications)
  .reset(events.resetApplications);

export const $statuses = ApplicationDomain.store(initialStatuses).on(
  events.getStatuses.doneData,
  reducers.setStatuses,
);

export const $pagesCount = ApplicationDomain.store(initialPagesCount)
  .on(events.getApplications.doneData, setPagesCount)
  .reset(events.resetApplications);

export const $pageNumber = ApplicationDomain.store(initialPageNumber)
  .on(events.getApplications, increasePageNumber)
  .on(events.getApplications.fail, reducePageNumber)
  .reset(events.resetApplications);

export const $hasMore = combine(
  $pagesCount,
  $pageNumber,
  (count, number) => count >= number,
);
