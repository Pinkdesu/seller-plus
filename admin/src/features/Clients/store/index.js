import { ClientsDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialCompanyClients = [];
const initialIndividualClients = [];

export const $companyClients = ClientsDomain.store(initialCompanyClients).on(
  events.getCompanyClients.doneData,
  reducers.setCompanyClients,
);

export const $individualClients = ClientsDomain.store(
  initialIndividualClients,
).on(events.getIndividualClients.doneData, reducers.setIndividualClients);
