import { MIN_PASSWORD, MAX_PASSWORD } from '~/constants';

export const isEmail = (value) => {
  const reg = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  return reg.test(value);
};

export const isLetters = (value) => {
  const reg = new RegExp(/^([a-zа-яё]+|\d+)$/i);

  return reg.test(value);
};

export const isValidPassword = (password) => {
  return password.length >= MIN_PASSWORD && password.length <= MAX_PASSWORD;
};

export const isPhone = (phone) => {
  const reg = new RegExp(/^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/);

  return reg.test(phone);
};

export const isAddress = (address) => {
  const reg = new RegExp(
    /^[ул|пер|пр|б-р]*\.{1}\s{1}[А-Яа-я0-9\-\s]{2,},{1}\s{1}дом\s{1}[А-Яа-я0-9/]{1,},{1}\s{1}кв\.{1}\s{1}[А-Яа-я0-9]{1,}$/,
    'gmi',
  );

  return reg.test(address);
};
