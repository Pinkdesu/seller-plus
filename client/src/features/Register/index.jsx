import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '~/features/Login/elements';
import Options from '~/features/Login/components/Options';
import TextField from '~/features/Common/TextField';
import Button from '~/features/Common/Button';

const Register = () => {
  const locale = useLocale();

  return (
    <S.LoginMain>
      <S.FormWrapper>
        <Options />
        <S.FormFields>
          <div>
            <TextField label={locale('email')} placeholder="user@gmail.com" />
            <TextField
              label={locale('firstName')}
              placeholder={locale('firstName')}
            />
            <TextField
              label={locale('secondName')}
              placeholder={locale('secondName')}
            />
            <TextField
              type="password"
              label={locale('password')}
              placeholder="********"
            />
            <TextField
              type="password"
              label={locale('repeatPassword')}
              placeholder="********"
            />
          </div>
          <S.ButtonWrapper>
            <Button text={locale('signUp')} />
          </S.ButtonWrapper>
        </S.FormFields>
      </S.FormWrapper>
    </S.LoginMain>
  );
};

export default Register;
