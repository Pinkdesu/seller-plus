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

export const STYLES = (theme) => ({
  filtersWrapper: {
    display: 'flex',
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  filter: {
    flex: '0 0 350px',
  },
  tableWrapper: {
    marginTop: theme.spacing(4),
  },
});

export const COLUMNS = [
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'name', label: 'ФИО', minWidth: 150 },
  { id: 'email', label: 'Email', minWidth: 100 },
  {
    id: 'phone',
    label: 'Телефон',
    minWidth: 100,
  },
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
  {
    id: 'inn',
    label: 'ИНН',
    minWidth: 100,
  },
];
