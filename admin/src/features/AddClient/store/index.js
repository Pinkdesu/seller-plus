import { AddClientDomain } from './domain';
import * as events from './events';
import * as reducers from './reducers';
import { setFormValue } from '~/features/AddProduct/store/reducers';

const initialDistricts = [];
const initialCompanyFormValues = {
  inn: '',
  ogrn: '',
  name: '',
  phone: '',
  email: '',
  companyName: '',
  legalAddress: '',
  cityDistrictId: null,
};

const initialIndividualFormValues = {
  inn: '',
  name: '',
  phone: '',
  email: '',
  address: '',
  passportSeries: '',
  passportNumber: '',
  issued: '',
  issuedDate: '',
  cityDistrictId: null,
};

export const $districts = AddClientDomain.store(initialDistricts).on(
  events.getDistricts.doneData,
  reducers.setDistricts,
);

export const $companyFormValues = AddClientDomain.store(
  initialCompanyFormValues,
)
  .on(events.setCompanyFormValue, setFormValue)
  .reset(events.addCompanyClient.done);

export const $individualFormValues = AddClientDomain.store(
  initialIndividualFormValues,
)
  .on(events.setIndividualFormValue, setFormValue)
  .reset(events.addIndividualClient.done);
