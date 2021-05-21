import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from './elements';
import CartProduct from '~/features/Header/components/CartProduct.jsx';

const Basket = () => {
  const locale = useLocale();

  return (
    <S.BasketMain>
      <S.BasketContentWrapper>
        <S.Layout>
          <S.BasketContent>
            <S.ContentHolders>
              <S.ContentHeader>
                <h2>{locale('myShoppingCart')}</h2>
              </S.ContentHeader>
              <S.BasketProducts>
                <CartProduct />
                <CartProduct />
                <CartProduct />
              </S.BasketProducts>
              <S.MoneySum>
                <h3>{locale('totalPrice', { sum: 1233123 })}</h3>
              </S.MoneySum>
            </S.ContentHolders>
          </S.BasketContent>
          <S.LeftSideWrapper>
            <S.LeftSide>
              <S.LeftSideTotal>
                <S.Totalheader>Итого</S.Totalheader>
                <S.Cost>
                  <span>Всег0:</span>
                  <span>13123</span>
                </S.Cost>
                <S.PayLinkWrapper>
                  <S.PayLink to="/">PAY</S.PayLink>
                </S.PayLinkWrapper>
              </S.LeftSideTotal>
            </S.LeftSide>
          </S.LeftSideWrapper>
        </S.Layout>
      </S.BasketContentWrapper>
    </S.BasketMain>
  );
};

export default Basket;
