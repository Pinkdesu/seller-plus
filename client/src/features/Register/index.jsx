import React, { useState, useCallback } from 'react';
import { useLocale } from '~/utils/useLocale';
import { isEmail, isValidPassword, isLetters } from '~/utils/validations';
import { ucFirst } from '~/utils/string';
import { register } from '~/features/AppBootstrap/store/events';
import * as S from '~/features/Login/elements';
import Options from '~/features/Login/components/Options';
import TextField from '~/features/Common/TextField';
import Button from '~/features/Common/Button';

const Register = () => {
  const locale = useLocale();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const handleEmailChange = useCallback((e) => {
    const value = e.target.value;
    setEmail(value.trim().toLowerCase());
  }, []);

  const handlePasswordChange = useCallback((e) => {
    const value = e.target.value;
    setPassword(value.trim());
  }, []);

  const handleRepeatPassChange = useCallback((e) => {
    const value = e.target.value;
    setRepeatPassword(value.trim());
  }, []);

  const handleFirstNameChange = useCallback((e) => {
    const value = e.target.value;

    if (!isLetters(value)) return;

    const correctName = ucFirst(value.trim().toLowerCase());
    setFirstName(correctName);
  }, []);

  const handleSecondNameChange = useCallback((e) => {
    const value = e.target.value;

    if (!isLetters(value)) return;

    const correctName = ucFirst(value.trim().toLowerCase());

    setSecondName(correctName);
  }, []);

  const onReg = () => {
    register({
      email,
      password,
      repeatPassword,
      firstName,
      secondName,
    });
  };

  const disabled = !(
    isEmail(email) &&
    isValidPassword(password) &&
    isValidPassword(repeatPassword) &&
    password === repeatPassword &&
    firstName &&
    secondName
  );

  return (
    <S.LoginMain>
      <S.FormWrapper>
        <Options />
        <S.FormFields>
          <div>
            <TextField
              value={email}
              onChange={handleEmailChange}
              label={locale('email')}
              placeholder="user@gmail.com"
            />
            <TextField
              value={firstName}
              onChange={handleFirstNameChange}
              label={locale('firstName')}
              placeholder={locale('firstName')}
            />
            <TextField
              value={secondName}
              onChange={handleSecondNameChange}
              label={locale('secondName')}
              placeholder={locale('secondName')}
            />
            <TextField
              value={password}
              onChange={handlePasswordChange}
              type="password"
              label={locale('password')}
              placeholder="********"
            />
            <TextField
              value={repeatPassword}
              onChange={handleRepeatPassChange}
              type="password"
              label={locale('repeatPassword')}
              placeholder="********"
            />
          </div>
          <S.ButtonWrapper>
            <Button
              text={locale('signUp')}
              disabled={disabled}
              onClick={onReg}
            />
          </S.ButtonWrapper>
        </S.FormFields>
      </S.FormWrapper>
    </S.LoginMain>
  );
};

export default Register;
