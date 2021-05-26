import React, { useRef } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useClickOutside } from '~/utils/useClickOutside';
import pluralize from '~/utils/pluralize';
import * as S from '../elements';
import CartProduct from './CartProduct';
import { ReactComponent as CloseSVG } from '~/assets/images/common/close.svg';

const CartMenu = (props) => {
  const menuRef = useRef();
  const locale = useLocale();

  const { closeMenu, open, products, productsCount } = props;

  useClickOutside(menuRef, closeMenu, open);

  return (
    <S.CartMenuWrapper ref={menuRef} open={open}>
      <S.CartMenu>
        <S.CartMenuContent open={open}>
          <S.MenuTopSide>
            <S.TopSideText>
              <span>{locale('myShoppingCart')}:</span>
              <span>
                {`${productsCount} ${pluralize(
                  productsCount,
                  ['product', 'product1', 'product2'],
                  locale,
                )}`}
              </span>
            </S.TopSideText>
            <S.TopSideCloseButton onClick={closeMenu}>
              <span>
                <CloseSVG />
              </span>
            </S.TopSideCloseButton>
          </S.MenuTopSide>
          <S.ProductsList>
            {products.map((product) => (
              <CartProduct
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
                quantity={product.quantity}
              />
            ))}
          </S.ProductsList>
          <S.MenuBottomSide>
            <S.MoneySum>
              <h1>{locale('totalPrice')}:</h1>
              <span>12323</span>
            </S.MoneySum>
            <S.ActionLinks>
              <S.MenuLink to="/basket">
                <span>{locale('viewShoppingCart')}</span>
              </S.MenuLink>
              <S.MenuLink to="/">
                <span>{locale('placeOrder')}</span>
              </S.MenuLink>
            </S.ActionLinks>
          </S.MenuBottomSide>
        </S.CartMenuContent>
      </S.CartMenu>
    </S.CartMenuWrapper>
  );
};

export default CartMenu;
