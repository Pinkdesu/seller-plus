import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { login } from '~/features/AppBootstrap/store/events';
import { useField, useEmailError, usePasswordError } from '~/utils/fields';
import * as S from './elements';
import Options from './components/Options';
import TextField from '~/features/Common/TextField';
import PasswordField from '~/features/Common/PasswordField';
import Button from '~/features/Common/Button';

const Login = () => {
  const locale = useLocale();

  const [email, onEmail] = useField('');
  const [password, onPassword] = useField('');

  const [emailError, onEmailBlur] = useEmailError(email);
  const [passwordError, onPasswordBlur] = usePasswordError(email);

  const onLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const disabled = emailError || passwordError;

  return (
    <S.LoginMain>
      <S.FormWrapper>
        <Options />
        <S.FormFields>
          <div>
            <TextField
              label={locale('login')}
              value={email}
              error={emailError}
              onChange={onEmail}
              onBlur={onEmailBlur}
            />
            <PasswordField
              value={password}
              label={locale('password')}
              error={passwordError}
              onChange={onPassword}
              onBlur={onPasswordBlur}
            />
          </div>
          <S.ButtonWrapper>
            <Button
              onClick={onLogin}
              text={locale('signIn')}
              disabled={disabled}
            />
          </S.ButtonWrapper>
          <S.ForgotPasWrapper>
            <S.ForgotLink to="/">{locale('forgotPassword')}</S.ForgotLink>
          </S.ForgotPasWrapper>
        </S.FormFields>
      </S.FormWrapper>
    </S.LoginMain>
  );
};

export default Login;
