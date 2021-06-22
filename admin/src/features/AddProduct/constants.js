export const INFO = [
  {
    title: 'Страна',
    description: '',
    unitId: null,
  },
  {
    title: 'Установка',
    description: '',
    unitId: null,
  },
];

export const getOptionUnit = (option) => option.value;
export const getOptionLabel = (option) => option.name;
export const getOptionSelected = (option, value) => option?.id === value?.id;
