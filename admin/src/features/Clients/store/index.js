import { ClientsDomain } from './domain';
import { combine } from 'effector';
import * as events from './events';
import * as reducers from './reducers';
import {
  setPagesCount,
  increasePageNumber,
  reducePageNumber,
} from '~/features/Products/store/reducers';

const initialCompanyClients = [];
const initialIndividualClients = [];

const initialCompanyPagesCount = 1;
const initialCompanyPageNumber = 1;

const initialIndividualPagesCount = 1;
const initialIndividualPageNumber = 1;

export const $companyClients = ClientsDomain.store(initialCompanyClients)
  .on(events.getCompanyClients.doneData, reducers.setClients)
  .on(events.searchCompanyClients.doneData, reducers.setSearchClients);

export const $individualClients = ClientsDomain.store(initialIndividualClients)
  .on(events.getIndividualClients.doneData, reducers.setClients)
  .on(events.searchIndividualClients.doneData, reducers.setSearchClients);

export const $companyPagesCount = ClientsDomain.store(initialCompanyPagesCount)
  .on(events.getCompanyClients.doneData, setPagesCount)
  .reset(events.resetCompanyClients);

export const $companyPageNumber = ClientsDomain.store(initialCompanyPageNumber)
  .on(events.getCompanyClients, increasePageNumber)
  .on(events.getCompanyClients.fail, reducePageNumber)
  .reset(events.resetCompanyClients);

export const $companyHasMore = combine(
  $companyPagesCount,
  $companyPageNumber,
  (count, number) => count >= number,
);

export const $individualPagesCount = ClientsDomain.store(
  initialIndividualPagesCount,
)
  .on(events.getIndividualClients.doneData, setPagesCount)
  .reset(events.resetIndividualClients);

export const $individualPageNumber = ClientsDomain.store(
  initialIndividualPageNumber,
)
  .on(events.getIndividualClients, increasePageNumber)
  .on(events.getIndividualClients.fail, reducePageNumber)
  .reset(events.resetIndividualClients);

export const $individualHasMore = combine(
  $individualPagesCount,
  $individualPageNumber,
  (count, number) => count >= number,
);
