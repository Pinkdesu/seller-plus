export const columns = [
  { id: 'id', label: 'ID', minWidth: 100 },
  { id: 'customer', label: 'Заказчик', minWidth: 150 },
  { id: 'status', label: 'Статус', class: 'status-cell', minWidth: 100 },
  {
    id: 'createAt',
    label: 'Создано',
    minWidth: 150,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'doneAt',
    label: 'Выполнено',
    minWidth: 150,
    align: 'center',
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'theme',
    label: 'Тема заявки',
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

export const rows = [
  {
    id: 1,
    customer: 'Иванов Иван',
    status: 'Выполнено',
    createAt: '01.06.2021',
    doneAt: '02.06.2021',
    theme: 'Газификация дома',
    executor: 'Петров Петрович',
  },
  {
    id: 2,
    customer: 'Иванов Иван',
    status: 'Выполнено',
    createAt: '01.06.2021',
    doneAt: '02.06.2021',
    theme: 'Газификация дома',
    executor: 'Петров Петрович',
  },
  {
    id: 3,
    customer: 'Иванов Иван',
    status: 'Выполнено',
    createAt: '01.06.2021',
    doneAt: '02.06.2021',
    theme: 'Газификация дома',
    executor: 'Петров Петрович',
  },
  {
    id: 4,
    customer: 'Иванов Иван',
    status: 'Выполнено',
    createAt: '01.06.2021',
    doneAt: '02.06.2021',
    theme: 'Газификация дома',
    executor: 'Петров Петрович',
  },
  {
    id: 5,
    customer: 'Иванов Иван',
    status: 'Выполнено',
    createAt: '01.06.2021',
    doneAt: '02.06.2021',
    theme: 'Газификация дома',
    executor: 'Петров Петрович',
  },
  {
    id: 6,
    customer: 'Иванов Иван',
    status: 'Выполнено',
    createAt: '01.06.2021',
    doneAt: '02.06.2021',
    theme: 'Газификация дома',
    executor: 'Петров Петрович',
  },
  {
    id: 7,
    customer: 'Иванов Иван',
    status: 'Выполнено',
    createAt: '01.06.2021',
    doneAt: '02.06.2021',
    theme: 'Газификация дома',
    executor: 'Петров Петрович',
  },
];