import { getDate } from '~/utils/getDate';

export const COLUMNS = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'client', label: 'Заказчик', minWidth: 150 },
  { id: 'status', label: 'Статус', class: 'status-cell', minWidth: 250 },
  {
    id: 'submissionDate',
    label: 'Создано',
    minWidth: 150,
    align: 'center',
    format: getDate,
  },
  {
    id: 'theme',
    label: 'Тема',
    minWidth: 200,
    align: 'center',
  },
  {
    id: 'description',
    label: 'Содержание',
    minWidth: 200,
    align: 'center',
  },
  {
    id: 'executor',
    label: 'Исполнитель',
    minWidth: 200,
    align: 'center',
  },
];
