//import { getDate } from '~/utils/getDate';

export const COLUMNS = [
  { id: 'id', label: 'ID', minWidth: 80 },
  { id: 'number', label: 'Номер', minWidth: 100 },
  { id: 'projectId', label: 'Номер проекта', minWidth: 100 },
  {
    id: 'submissionDate',
    label: 'Создано',
    minWidth: 150,
    align: 'center',
  },
  {
    id: 'desctiption',
    label: 'Содержание',
    minWidth: 200,
  },
];

const data = `33590! 06.11.2020! Разрешение на строительство|
25022! 17.11.2020! Разрешение от совладельца газифицируемого домовладения|
54595! 08.12.2020! Разрешение от собственника газовых сетей|
70864! 17.12.2020! Разрешение от собственника газовых сетей|
50958! 24.12.2020! Разрешение от совладельца газифицируемого домовладения|
22234! 09.03.2021! Разрешение на строительство|
37890! 12.03.2021! Разрешение на строительство|
73821! 22.04.2021! Разрешение на ввод газа|
96325! 26.04.2021! Разрешение на ввод газа|
60566! 14.05.2021! Разрешение на ввод газа|`
  .split('|')
  .map((item) => item.split('!'));

data.pop();

export const ROWS = data.map((item, index) => {
  const [number, submissionDate, desctiption] = item.map((el) => el.trim());
  console.log(desctiption);
  return {
    id: index + 1,
    projectId: index + 1,
    number,
    submissionDate,
    desctiption,
  };
});
