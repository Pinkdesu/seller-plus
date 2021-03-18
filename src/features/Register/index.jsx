import React from 'react';
import { Link } from 'react-router-dom';
import Button from '~/features/Common/Button';
import Input from '~/features/Common/Input';
import { useLocale } from '~/utils/useLocale';

const Register = () => {
  const locale = useLocale();

  return (
    <div className="form-page">
      <div className="form-column">
        <h1 className="form-column__title">
          {locale('registration').toUpperCase()}
        </h1>
        <Input className="form-column__input" label={locale('name')} />
        <Input className="form-column__input" label={locale('login')} />
        <Input className="form-column__input" label={locale('password')} />
        <Input
          className="form-column__input"
          label={locale('repeatPassword')}
        />
        <Button
          className="form-column__primary-btn"
          text={locale('signUp').toUpperCase()}
        />
      </div>
      <div className="links-block-column">
        <Link to="/">{locale('signIn')}</Link>
      </div>
    </div>
  );
};

export default Register;
