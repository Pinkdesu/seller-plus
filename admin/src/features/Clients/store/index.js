import { ClientsDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';

const initialClients = [];

export const $clients = ClientsDomain.store(initialClients).on(
  events.getClients.doneData,
  reducers.setClients,
);
