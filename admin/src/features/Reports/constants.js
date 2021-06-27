import { getDate } from '~/utils/getDate';

const addCurrency = (value) => `${+value.toFixed(2)} руб.`;

export const EMPLOYEE_COLUMNS = [
  { id: 'name', label: 'Ответственный', minWidth: 120 },
  { id: 'count', label: 'Количество выполненых заявок', minWidth: 120 },
  { id: 'price', label: 'Общая выручка', minWidth: 80, format: addCurrency },
  {
    id: 'avPrice',
    label: 'Средняя выручка по одной заявке',
    minWidth: 100,
    format: addCurrency,
  },
];

export const PRODUCT_COLUMNS = [
  { id: 'id', label: 'ID товара', minWidth: 100 },
  { id: 'name', label: 'Оборудование', minWidth: 150 },
  { id: 'count', label: 'Количество на складе', minWidth: 120 },
];

export const CLIENT_COLUMNS = [
  { id: 'id', label: 'ID заявки', minWidth: 100 },
  { id: 'theme', label: 'Тема заявки', minWidth: 150 },
  { id: 'name', label: 'Клиент', minWidth: 120 },
  { id: 'status', label: 'Статус заявки', minWidth: 150 },
];

export const DISTRICT_COLUMNS = [
  { id: 'id', label: 'ID заявки', minWidth: 100 },
  { id: 'district', label: 'Район', minWidth: 150 },
  { id: 'theme', label: 'Тема', minWidth: 150 },
  { id: 'status', label: 'Статус заявки', minWidth: 120 },
];

export const APP_COUNT_COLUMNS = [
  { id: 'id', label: 'ID клиента', minWidth: 80 },
  { id: 'name', label: 'ФИО', minWidth: 150 },
  { id: 'count', label: 'Количество заявок', minWidth: 150 },
];

export const ORDER_COLUMNS = [
  { id: 'id', label: 'ID оборудования', minWidth: 100 },
  { id: 'name', label: 'Название', minWidth: 150 },
  { id: 'count', label: 'Количество заказов', minWidth: 100 },
];

export const USER_COLUMNS = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'name', label: 'Имя пользователя', minWidth: 150 },
  { id: 'count', label: 'Количество заказов', minWidth: 100 },
];

export const AVERAGE_CHECK_COLUMNS = [
  {
    id: 'sum',
    label: 'Выручка',
    minWidth: 100,
    format: addCurrency,
  },
  { id: 'count', label: 'Количество заказов', minWidth: 150 },
  {
    id: 'average',
    label: 'Средний чек',
    minWidth: 100,
    format: addCurrency,
  },
];

export const INVOICE_COLUMNS = [
  { id: 'number', label: '№ накладной', minWidth: 80 },
  { id: 'employee', label: 'Ответственный', minWidth: 100 },
  { id: 'supplierDate', label: 'Дата', minWidth: 120, format: getDate },
  { id: 'name', label: 'Название товара', minWidth: 120 },
  { id: 'brandName', label: 'Бренд', minWidth: 80 },
  { id: 'count', label: 'Количество', minWidth: 100 },
  {
    id: 'supplierPrice',
    label: 'Закупочная цена за 1 ед.',
    minWidth: 120,
    format: addCurrency,
  },
];
