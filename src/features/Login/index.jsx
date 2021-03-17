import React from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '~/utils/useLocale';
import Button from '~/features/Common/Button';
import Input from '~/features/Common/Input';
import './style.scss';

const Login = () => {
  const locale = useLocale();

  return (
    <div className="form-page">
      <div className="form-column">
        <h1 className="form-column__title">{locale('enter').toUpperCase()}</h1>
        <Input className="form-column__input" label={locale('login')} />
        <Input
          className="form-column__input"
          type="password"
          label={locale('password')}
        />
        <Button
          className="form-column__primary-btn"
          text={locale('signIn').toUpperCase()}
        />
      </div>
      <div className="links-block-column">
        <Link to="/">{locale('forgotPassword')}?</Link>
        <Link to="/">{locale('signUp')}</Link>
      </div>
    </div>
  );
};

export default Login;
