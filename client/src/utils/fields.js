import { useState, useCallback, useEffect } from 'react';
import {
  isEmail,
  isValidPassword,
  isPhone,
  isAddress,
} from '~/utils/validations';
import { ucFirst } from '~/utils/string';

export const useField = (initValue = '') => {
  const [field, setField] = useState(initValue);

  const handleChange = useCallback((e) => {
    const value = e.target.value.trim();

    setField(value);
  }, []);

  return [field, handleChange];
};

export const useName = (initValue = '') => {
  const [name, setName] = useState(initValue);

  const handleChange = useCallback((e) => {
    const value = e.target.value.trimStart();
    const correctName = ucFirst(value.toLowerCase());

    setName(correctName);
  }, []);

  return [name, handleChange];
};

export const useAddress = (initValue = '') => {
  const [address, setAddress] = useState(initValue);

  const handleChange = useCallback((e) => {
    const value = e.target.value;

    setAddress(value);
  }, []);

  return [address, handleChange];
};

export const usePasswordError = (password) => {
  const [error, setError] = useState(null);

  useEffect(() => setError(null), [password]);

  const handleBlur = useCallback((e) => {
    const value = e.target.value;

    if (!value || !isValidPassword(value)) {
      setError('error.passwordLength');
      return;
    }
  }, []);

  return [error, handleBlur];
};

export const useEmailError = (email) => {
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => error && setError(null), [email]);

  const handleBlur = useCallback((e) => {
    const value = e.target.value;

    if (!value || !isEmail(value)) {
      setError('error.enterCorrectEmail');
      return;
    }
  }, []);

  return [error, handleBlur];
};

export const useNameError = (name) => {
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => error && setError(null), [name]);

  const handleBlur = useCallback((e) => {
    const value = e.target.value;

    if (!value) {
      setError('error.empty');
      return;
    }
  }, []);

  return [error, handleBlur];
};

export const useAddressError = (name) => {
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => error && setError(null), [name]);

  const handleBlur = useCallback((e) => {
    const value = e.target.value;

    if (!value || !isAddress(value)) {
      setError('error.empty');
      return;
    }
  }, []);

  return [error, handleBlur];
};

export const usePhoneError = (phone) => {
  const [error, setError] = useState(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => error && setError(null), [phone]);

  const handleBlur = useCallback((e) => {
    const value = e.target.value;

    if (value && !isPhone(value)) {
      setError('error.enterCorrectPhone');
      return;
    }
  }, []);

  return [error, handleBlur];
};
