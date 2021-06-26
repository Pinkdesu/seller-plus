import { getDate } from '~/utils/getDate';

export const COLUMNS = [
  { id: 'number', label: 'Номер', minWidth: 100 },
  { id: 'projectId', label: 'Номер проекта', minWidth: 100 },
  {
    id: 'submissionDate',
    label: 'Дата получения',
    minWidth: 150,
    align: 'center',
    format: getDate,
  },
  {
    id: 'description',
    label: 'Содержание',
    minWidth: 200,
  },
];
