export const getPickerDate = (value) => {
  const [date] = new Date(value).toISOString().split('T');

  return date;
};
