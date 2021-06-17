import { getDate } from '~/utils/getDate';

export const COLUMNS = [
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'number', label: 'Номер', minWidth: 100 },
  { id: 'applicationId', label: 'Заявка №', minWidth: 100 },
  {
    id: 'submissionDate',
    label: 'Создано',
    minWidth: 150,
    align: 'center',
    format: getDate,
  },
  {
    id: 'description',
    label: 'Содержание',
    minWidth: 200,
    align: 'center',
  },
];
