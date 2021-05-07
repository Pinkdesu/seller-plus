import React, { memo } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import NavItem from './NavItem';
import LogoBar from './LogoBar';
import logo from '~/assets/images/header/logo-180-white.png';

const RightSideMenu = (props) => {
  const locale = useLocale();

  const { open, toggleMenu } = props;

  return (
    <S.LeftSideMenu open={open}>
      <LogoBar image={logo} />
      <S.NavBar>
        <NavItem path="/" text={locale('home')} onClick={toggleMenu} exact />
        <NavItem path="/shop" text={locale('shop')} onClick={toggleMenu} />
        <NavItem path="/basket" text={locale('basket')} onClick={toggleMenu} />
        <NavItem
          path="/account"
          text={locale('personalAccount')}
          onClick={toggleMenu}
        />
        <NavItem
          path="/service"
          text={locale('services')}
          onClick={toggleMenu}
        />
      </S.NavBar>
    </S.LeftSideMenu>
  );
};

export default memo(RightSideMenu);
