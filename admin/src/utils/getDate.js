export const getDate = (value) =>
  new Date(value).toLocaleString('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });
