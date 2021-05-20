import React, { memo, useState } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import NavItem from './NavItem';
import LogoBar from './LogoBar';
import CartMenu from './CartMenu';
import logo from '~/assets/images/header/logo-180-white.png';
import { ReactComponent as UserSVG } from '~/assets/images/common/user.svg';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const TopSideMenu = (props) => {
  const locale = useLocale();

  const { hidden } = props;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <S.TopSideMenu hidden={hidden}>
      <LogoBar image={logo} />
      <S.NavBar>
        <NavItem path="/" text={locale('home')} exact />
        <NavItem path="/shop" text={locale('shop')} />
        <NavItem path="/service" text={locale('services')} />
      </S.NavBar>
      <S.NavBar>
        <S.IconButton onClick={toggleMenu}>
          <S.IconWrapper>
            <span className="icon">
              <CartSVG />
            </span>
            <span className="alert">22</span>
          </S.IconWrapper>
          <CartMenu open={isMenuOpen} closeMenu={toggleMenu} />
        </S.IconButton>
        <S.IconLink to="account">
          <S.IconWrapper>
            <span className="icon">
              <UserSVG />
            </span>
            <span className="alert">!</span>
          </S.IconWrapper>
        </S.IconLink>
      </S.NavBar>
    </S.TopSideMenu>
  );
};

export default memo(TopSideMenu);
