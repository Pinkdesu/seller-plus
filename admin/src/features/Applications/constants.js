import { getDate } from '~/utils/getDate';

export const COLUMNS = [
  { id: 'id', label: 'Номер', minWidth: 100 },
  { id: 'client', label: 'Клиент', minWidth: 150 },
  {
    id: 'status',
    label: 'Статус',
    class: 'status-cell',
    align: 'center',
    minWidth: 250,
  },
  {
    id: 'submissionDate',
    label: 'Дата подачи',
    minWidth: 120,
    align: 'center',
    format: getDate,
  },
  {
    id: 'executionDate',
    label: 'Дата исполнения',
    minWidth: 120,
    align: 'center',
    format: getDate,
  },
  {
    id: 'theme',
    label: 'Тема',
    minWidth: 200,
  },
  {
    id: 'description',
    label: 'Содержание',
    minWidth: 200,
  },
  {
    id: 'employees',
    label: 'Ответственный(ие)',
    minWidth: 200,
    align: 'center',
  },
];
