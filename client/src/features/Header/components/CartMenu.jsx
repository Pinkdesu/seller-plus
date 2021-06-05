import React, { useEffect, useState } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useLocation } from 'react-router';
import { useStore } from 'effector-react';
import { $basket } from '~/features/Basket/store';
import { closeMenu } from '~/features/Basket/store/events';
import { useStringNumber } from '~/utils/useStringNumber';
import pluralize from '~/utils/pluralize';
import * as S from '../elements';
import CartProduct from './CartProduct';
import { ReactComponent as CloseSVG } from '~/assets/images/common/close.svg';

const CartMenu = (props) => {
  const locale = useLocale();
  const location = useLocation();

  const { open } = props;

  const { products, productsCount, totalPrice } = useStore($basket);

  const [hover, setHover] = useState(false);

  const formatedPrice = useStringNumber(totalPrice);

  const onMouseOver = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  useEffect(() => {
    let timer;

    if (open && !hover) {
      timer = setTimeout(() => closeMenu(), 2000);
    }

    return () => clearTimeout(timer);
  }, [open, hover, productsCount]);

  useEffect(() => closeMenu(), [location]);

  return (
    <S.CartMenuWrapper
      open={open}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
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
              <span>
                {locale('priceWithCurrency', { price: formatedPrice })}
              </span>
            </S.MoneySum>
            <S.ActionLinks>
              <S.MenuLink to="/basket">
                <span>{locale('viewShoppingCart')}</span>
              </S.MenuLink>
              <S.MenuLink to="/payment">
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
