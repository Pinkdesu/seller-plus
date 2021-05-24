import React, { useState, useCallback } from 'react';
import { useLocale } from '~/utils/useLocale';
import { isEmail, isValidPassword } from '~/utils/validations';
import { login } from '~/features/AppBootstrapp/model/events';
import * as S from './elements';
import Options from './components/Options';
import TextField from '~/features/Common/TextField';
import Button from '~/features/Common/Button';

const Login = () => {
  const locale = useLocale();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = useCallback((e) => {
    const value = e.target.value;
    setEmail(value.trim().toLowerCase());
  }, []);

  const handlePasswordChange = useCallback((e) => {
    const value = e.target.value;
    setPassword(value.trim());
  }, []);

  const onLogin = () => {
    login({ email, password });
  };

  const disabled = !isEmail(email) || !isValidPassword(password);

  return (
    <S.LoginMain>
      <S.FormWrapper>
        <Options />
        <S.FormFields>
          <div>
            <TextField
              label={locale('login')}
              value={email}
              onChange={handleEmailChange}
              placeholder="user@gmail.com"
            />
            <TextField
              type="password"
              value={password}
              label={locale('password')}
              onChange={handlePasswordChange}
              placeholder="********"
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
