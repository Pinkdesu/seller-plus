export const EMPLOYEE_COLUMNS = [
  { id: 'employee', label: 'Ответственный', minWidth: 120 },
  { id: 'status1', label: 'Открыта', minWidth: 100 },
  { id: 'status2', label: 'Принята в исполнение', minWidth: 120 },
  { id: 'status3', label: 'Просрочено исполнение', minWidth: 120 },
  { id: 'status4', label: 'Отмена', minWidth: 100 },
  { id: 'status5', label: 'Требует уточнения', minWidth: 120 },
  { id: 'status6', label: 'Выполнена', minWidth: 100 },
  { id: 'status7', label: 'Согласовано', minWidth: 100 },
  { id: 'status8', label: 'Завершена', minWidth: 100 },
  { id: 'status9', label: 'Приостановлена', minWidth: 100 },
  { id: 'status10', label: 'Архив', minWidth: 80 },
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
