import { MIN_PASSWORD, MAX_PASSWORD } from '~/constants';

export const isEmail = (value) => {
  const reg = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
