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

const data = `93656! 14.10.2020! Акт инвентаризации отапливаемой площади|
53333! 28.10.2020! Акт освидетельствования системы вентиляции|
58918! 24.12.2020! Акт сверки|
30795! 04.02.2021! Акт об определении границы раздела собственности|
73418! 15.02.2021! Акт инвентаризации отапливаемой площади|
52423! 25.02.2021! Акт освидетельствования системы вентиляции|
93780! 26.02.2021! Акт освидетельствования системы вентиляции|
61418! 29.03.2021! Акт сверки|
94919! 19.04.2021! Акт сверки|
44326! 20.04.2021! Акт сверки|`
  .split('|')
  .map((item) => item.split('!'));

data.pop();

export const ROWS = data.map((item, index) => {
  const [number, submissionDate, desctiption] = item.map((el) => el.trim());

  return {
    id: index + 1,
    projectId: index + 1,
    number,
    submissionDate,
    desctiption,
  };
});
