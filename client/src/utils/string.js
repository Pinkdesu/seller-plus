export const ucFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const getStringNumber = (number) => {
  if (isNaN(number)) return;

  const trunc = Math.trunc(number);
  const decimal = parseFloat(number).toFixed(2).split('.')[1];

  const str = String(trunc);
  const first = str.length > 3 ? str.substr(0, str.length - 3) : str;
  const second = str.length > 3 ? ' ' + str.slice(str.length - 3) : '';

  return `${first}${second},${decimal}`;
};
