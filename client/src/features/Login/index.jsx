import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from './elements';
import Options from './components/Options';
import TextField from '~/features/Common/TextField';
import Button from '~/features/Common/Button';

const Login = () => {
  const locale = useLocale();

  return (
    <S.LoginMain>
      <S.FormWrapper>
        <Options />
        <S.FormFields>
          <div>
            <TextField label={locale('login')} placeholder="user@gmail.com" />
            <TextField
              type="password"
              label={locale('password')}
              placeholder="********"
            />
          </div>
          <S.ButtonWrapper>
            <Button text={locale('signIn')} />
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
