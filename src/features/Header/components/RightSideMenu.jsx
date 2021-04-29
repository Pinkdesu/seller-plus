import React, { memo } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import NavItem from './NavItem';
import LogoBar from './LogoBar';
import logo from '~/assets/images/header/logo-180-white.png';

const RightSideMenu = (props) => {
  const locale = useLocale();

  const { open } = props;

  return (
    <S.RightSideMenu open={open}>
      <LogoBar image={logo} />
      <S.NavBar>
        <NavItem path="/" text={locale('home')} exact />
        <NavItem path="/shop" text={locale('shop')} />
        <NavItem path="/basket" text={locale('basket')} />
        <NavItem path="/account" text={locale('personalAccount')} />
        <NavItem path="/service" text={locale('services')} />
      </S.NavBar>
    </S.RightSideMenu>
  );
};

export default memo(RightSideMenu);
