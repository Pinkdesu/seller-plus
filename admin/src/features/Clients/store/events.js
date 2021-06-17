import { ClientsDomain } from './domain';
import { ClientController } from '~/api/controllers/ClientController';

export const getCompanyClients = ClientsDomain.effect().use(
  ClientController.getClients,
);

export const getIndividualClients = ClientsDomain.effect().use(
  ClientController.getClients,
);

export const resetCompanyClients = ClientsDomain.event();

export const resetIndividualClients = ClientsDomain.event();
