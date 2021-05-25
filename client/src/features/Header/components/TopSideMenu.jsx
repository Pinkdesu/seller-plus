import React, { memo, useState } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { $user } from '~/features/AppBootstrap/store';
import * as S from '../elements';
import NavItem from './NavItem';
import LogoBar from './LogoBar';
import CartMenu from './CartMenu';
import logo from '~/assets/images/header/logo-180-white.png';
import { ReactComponent as UserSVG } from '~/assets/images/common/user.svg';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const TopSideMenu = (props) => {
  const locale = useLocale();
  const { isAuth } = useStore($user);

  const { hidden } = props;

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const accountPath = isAuth ? '/account' : '/account/login';

  return (
    <S.TopSideMenu hidden={hidden}>
      <LogoBar image={logo} />
      <S.NavBar>
        <NavItem path="/" text={locale('home')} exact />
        <NavItem path="/shop" text={locale('shop')} />
        <NavItem path="/service" text={locale('services')} />
      </S.NavBar>
      <S.NavBar>
        <S.NavItem>
          <S.IconButton onClick={toggleMenu}>
            <S.LinkIcon>
              <CartSVG />
            </S.LinkIcon>
            <S.LinkAlert>22</S.LinkAlert>
          </S.IconButton>
          <CartMenu open={isMenuOpen} closeMenu={toggleMenu} />
        </S.NavItem>
        <S.NavItem>
          <S.IconLink to={accountPath}>
            <S.LinkIcon>
              <UserSVG />
            </S.LinkIcon>
            <S.LinkAlert>!</S.LinkAlert>
          </S.IconLink>
        </S.NavItem>
      </S.NavBar>
    </S.TopSideMenu>
  );
};

export default memo(TopSideMenu);
