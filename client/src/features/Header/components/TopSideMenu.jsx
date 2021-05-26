import React, { memo, useState } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useHistory } from 'react-router';
import { useStore } from 'effector-react';
import { $user } from '~/features/AppBootstrap/store';
import { $basket } from '~/features/Basket/store';
import * as S from '../elements';
import NavItem from './NavItem';
import LogoBar from './LogoBar';
import CartMenu from './CartMenu';
import logo from '~/assets/images/header/logo-180-white.png';
import { ReactComponent as UserSVG } from '~/assets/images/common/user.svg';
import { ReactComponent as CartSVG } from '~/assets/images/common/shopping-cart.svg';

const TopSideMenu = (props) => {
  const locale = useLocale();
  const history = useHistory();

  const { hidden } = props;

  const { isAuth } = useStore($user);
  const { products, productsCount } = useStore($basket);

  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    if (productsCount > 0) {
      setMenuOpen(true);
      return;
    }

    history.push('/basket');
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
          <S.IconButton onClick={openMenu}>
            <S.LinkIcon>
              <CartSVG />
            </S.LinkIcon>
            {Boolean(productsCount) && (
              <S.LinkAlert>{productsCount}</S.LinkAlert>
            )}
          </S.IconButton>
          <CartMenu
            open={isMenuOpen}
            closeMenu={closeMenu}
            productsCount={productsCount}
            products={products}
          />
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
