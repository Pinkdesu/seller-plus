import { getDate } from '~/utils/getDate';

export const TABS = [
  {
    id: 1,
    label: 'Физические лица',
  },
  {
    id: 2,
    label: 'Компании',
  },
];

export const COMMON_COLUMNS = [
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'name', label: 'ФИО', minWidth: 150 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'phone',
    label: 'Телефон',
    minWidth: 100,
  },
  {
    id: 'district',
    label: 'Район',
    minWidth: 100,
  },
  {
    id: 'inn',
    label: 'ИНН',
    minWidth: 100,
  },
];

export const INDIVIDUAL_COLUMNS = [
  ...COMMON_COLUMNS,
  {
    id: 'passportSeries',
    label: 'Серия паспорта',
    minWidth: 80,
  },
  {
    id: 'passportNumber',
    label: 'Номер паспорта',
    minWidth: 100,
  },
  {
    id: 'issued',
    label: 'Кем выдан',
    minWidth: 150,
  },
  {
    id: 'issuedDate',
    label: 'Когда выдан',
    minWidth: 120,
    format: getDate,
  },
  {
    id: 'address',
    label: 'Адрес',
    minWidth: 200,
  },
];

export const COMPANY_COLUMNS = [
  ...COMMON_COLUMNS,
  {
    id: 'companyName',
    label: 'Название компании',
    minWidth: 100,
  },
  {
    id: 'legalAddress',
    label: 'Юр. адрес',
    minWidth: 100,
  },
  {
    id: 'ogrn',
    label: 'ОГРН',
    minWidth: 80,
  },
];
