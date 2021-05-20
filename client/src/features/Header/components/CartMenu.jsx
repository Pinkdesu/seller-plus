import React from 'react';
import * as S from '../elements';
import CartMenuProduct from './CartMenuProduct';
import { ReactComponent as CloseSVG } from '~/assets/images/common/close.svg';

const CartMenu = (props) => {
  const { closeMenu, open } = props;

  return (
    <S.CartMenuWrapper open={open}>
      <S.CartMenu>
        <S.CartMenuContent open={open}>
          <S.MenuTopSide>
            <S.TopSideText>
              <span>Моя корзина</span>
              <span>1 товар</span>
            </S.TopSideText>
            <S.TopSideCloseButton onClick={closeMenu}>
              <span>
                <CloseSVG />
              </span>
            </S.TopSideCloseButton>
          </S.MenuTopSide>
          <S.ProductsList>
            <CartMenuProduct />
          </S.ProductsList>
          <S.MenuBottomSide>
            <S.MoneySum>
              <h1>Всего:</h1>
              <span>12323</span>
            </S.MoneySum>
            <S.ActionLinks>
              <S.MenuLink to="/">
                <span>Посмотреть корзину</span>
              </S.MenuLink>
              <S.MenuLink to="/">
                <span>Оформить заказ</span>
              </S.MenuLink>
            </S.ActionLinks>
          </S.MenuBottomSide>
        </S.CartMenuContent>
      </S.CartMenu>
    </S.CartMenuWrapper>
  );
};

export default CartMenu;
