import { ClientsDomain } from './domain';
import { ClientController } from '~/api/controllers/ClientController';

export const getClients = ClientsDomain.effect().use(
  ClientController.getClients,
);
