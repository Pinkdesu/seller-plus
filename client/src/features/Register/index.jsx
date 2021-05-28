import React from 'react';
import { useLocale } from '~/utils/useLocale';
import {
  useField,
  useName,
  useNameError,
  useEmailError,
  usePasswordError,
} from '~/utils/fields';
import { register } from '~/features/AppBootstrap/store/events';
import * as S from '~/features/Login/elements';
import Options from '~/features/Login/components/Options';
import TextField from '~/features/Common/TextField';
import PasswordField from '~/features/Common/PasswordField';
import Button from '~/features/Common/Button';

const Register = () => {
  const locale = useLocale();

  const [email, onEmail] = useField('');
  const [password, onPassword] = useField('');
  const [repeatPassword, onRepeatPassword] = useField('');
  const [firstName, onFirstName] = useName('');
  const [secondName, onSecondName] = useName('');

  const [emailError, onEmailBlur] = useEmailError(email);
  const [passwordError, onPasswordBlur] = usePasswordError(password);
  const [rePasswordError, onRePasswordBlur] = usePasswordError(repeatPassword);
  const [firstNameError, onFirstNameBlur] = useNameError(firstName);
  const [secondNameError, onSecondNameBlur] = useNameError(secondName);

  const onReg = () => {
    register({
      email,
      password,
      repeatPassword,
      firstName,
      secondName,
    });
  };

  const passMatchError = password !== repeatPassword;

  const disabled =
    emailError ||
    passwordError ||
    rePasswordError ||
    firstNameError ||
    secondNameError ||
    passMatchError;

  return (
    <S.LoginMain>
      <S.FormWrapper>
        <Options />
        <S.FormFields>
          <div>
            <TextField
              type="email"
              value={email}
              onChange={onEmail}
              onBlur={onEmailBlur}
              error={emailError}
              label={locale('email')}
            />
            <TextField
              value={firstName}
              onChange={onFirstName}
              onBlur={onFirstNameBlur}
              error={firstNameError}
              label={locale('firstName')}
            />
            <TextField
              value={secondName}
              onChange={onSecondName}
              onBlur={onSecondNameBlur}
              error={secondNameError}
              label={locale('secondName')}
            />
            <PasswordField
              value={password}
              onChange={onPassword}
              onBlur={onPasswordBlur}
              error={passMatchError || passwordError}
              label={locale('password')}
            />
            <PasswordField
              value={repeatPassword}
              onChange={onRepeatPassword}
              onBlur={onRePasswordBlur}
              error={passMatchError || rePasswordError}
              label={locale('repeatPassword')}
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
