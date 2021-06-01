import { useState, useCallback, useEffect } from 'react';
import { isEmail, isValidPassword } from '~/utils/validations';

export const useField = (initValue = '') => {
  const [field, setField] = useState(initValue);

  const handleChange = useCallback((e) => {
    const value = e.target.value.trim();

    setField(value);
  }, []);

  return [field, handleChange];
};

export const usePasswordError = (password) => {
  const [error, setError] = useState(null);

  useEffect(() => setError(null), [password]);

  const handleBlur = useCallback((e) => {
    const value = e.target.value;

    if (!value || !isValidPassword(value)) {
      setError('Длина пароля не меньше 8 и не больше 40 символов');
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
      setError('Некорректный емайл');
      return;
    }
  }, []);

  return [error, handleBlur];
};
