import { AddClientDomain } from './domain';
import { DistrictController } from '~/api/controllers/DistrictController';
import { ClientController } from '~/api/controllers/ClientController';

export const getDistricts = AddClientDomain.effect().use(
  DistrictController.getDistricts,
);

export const addCompanyClient = AddClientDomain.effect().use(
  ClientController.addClient,
);

export const addIndividualClient = AddClientDomain.effect().use(
  ClientController.addClient,
);

export const setCompanyFormValue = AddClientDomain.event();

export const setIndividualFormValue = AddClientDomain.event();
