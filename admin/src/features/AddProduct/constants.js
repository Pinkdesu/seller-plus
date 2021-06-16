export const INFO = [
  {
    title: 'Страна',
    description: '',
    unitId: null,
  },
];

export const INFO_CATEGORY1 = [
  {
    title: 'Страна',
    description: '',
    unitId: null,
  },
  {
    title: 'Принцип работы',
    description: '',
    unitId: null,
  },
  {
    title: 'Тип камеры',
    description: '',
    unitId: null,
  },
  {
    title: 'Кол-во контуров',
    description: '',
    unitId: null,
  },
];

export const getOptionUnit = (option) => option.value;
export const getOptionLabel = (option) => option.name;
export const getOptionSelected = (option, value) => option?.id === value?.id;
