import React, { memo } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import NavItem from './NavItem';
import LogoBar from './LogoBar';
import logo from '~/assets/images/header/logo-180-white.png';
import { ReactComponent as UserSVG } from '~/assets/images/common/user.svg';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const TopSideMenu = (props) => {
  const locale = useLocale();

  const { hidden } = props;

  return (
    <S.TopSideMenu hidden={hidden}>
      <LogoBar image={logo} />
      <S.NavBar>
        <NavItem path="/" text={locale('home')} exact />
        <NavItem path="/shop" text={locale('shop')} />
        <NavItem path="/service" text={locale('services')} />
      </S.NavBar>
      <S.NavBar>
        <S.IconLink to="/basket">
          <span className="icon">
            <CartSVG />
          </span>
          <span className="alert">22</span>
        </S.IconLink>
        <S.IconLink to="account">
          <span className="icon">
            <UserSVG />
          </span>
          <span className="alert">!</span>
        </S.IconLink>
      </S.NavBar>
    </S.TopSideMenu>
  );
};

export default memo(TopSideMenu);
