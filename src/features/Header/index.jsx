import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocale } from '~/utils/useLocale';
import * as S from './elements';
import NavItem from './components/NavItem';
import logo from '~/assets/images/header/logo-180-white.png';

const Header = () => {
  const locale = useLocale();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <S.MenuButton onClick={handleOpen}>
        <S.MenuHamburger open={open} />
      </S.MenuButton>
      <S.Header open={open}>
        <S.LogoBar>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </S.LogoBar>
        <S.NavBar>
          <NavItem path="/" text={locale('home')} exact />
          <NavItem path="/shop" text={locale('shop')} />
          <NavItem path="/service" text={locale('services')} />
          <NavItem path="/profile" text={locale('profile')} />
        </S.NavBar>
      </S.Header>
    </>
  );
};

export default Header;
