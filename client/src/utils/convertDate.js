import getUserLocale from 'get-user-locale';

const DATE_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
};

const convertDate = (date) => {
  if (!date) return;

  const activeLocale = 'ru' || getUserLocale();

  return new Date(date).toLocaleString(activeLocale, DATE_OPTIONS);
};

export default convertDate;
