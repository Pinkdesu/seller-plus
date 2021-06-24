import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { useStringNumber } from '~/utils/useStringNumber';
import { $basket } from './store';
import { $user } from '~/features/AppBootstrap/store';
import * as S from './elements';
import CartProduct from '~/features/Common/CartProduct.jsx';
import EmptyContent from '~/features/Common/EmptyContent';
import RightSide from '~/features/Common/RightSide';

const Basket = () => {
  const locale = useLocale();

  const { isAuth } = useStore($user);
  const { products, totalPrice } = useStore($basket);

  const isEmpty = !products.length;
  const formatedPrice = useStringNumber(totalPrice);

  if (isEmpty) {
    return (
      <EmptyContent
        path={isAuth ? '/shop' : '/account/login'}
        title={locale('basket.yourBagIsEmpty')}
        linkText={locale(isAuth ? 'shop' : 'signIn')}
        subtitle={locale(
          isAuth ? 'basket.addProductsToBag' : 'basket.logInToView',
        )}
      >
        <EmptyContent.CartIcon />
      </EmptyContent>
    );
  }

  return (
    <S.PageMain>
      <S.PageContentWrapper>
        <S.Layout>
          <S.PageContent>
            <S.ContentHolders>
              <S.LeftSideBlockWrapper>
                <S.ContentHeader>{locale('myShoppingCart')}</S.ContentHeader>
              </S.LeftSideBlockWrapper>
              <S.BasketProducts>
                {products.map((product) => (
                  <CartProduct key={product.id} {...product}>
                    <CartProduct.DeleteOneButton id={product.id} />
                  </CartProduct>
                ))}
              </S.BasketProducts>
              <S.MoneySum>
                <S.MoneyHeader>
                  {locale('totalPrice')}{' '}
                  {locale('priceWithCurrency', { price: formatedPrice })}
                </S.MoneyHeader>
              </S.MoneySum>
            </S.ContentHolders>
          </S.PageContent>
          <RightSide>
            <RightSide.Header localeText="total" />
            <RightSide.Line />
            <RightSide.Footer>
              <RightSide.Cost />
            </RightSide.Footer>
            <RightSide.PayLink />
          </RightSide>
        </S.Layout>
      </S.PageContentWrapper>
    </S.PageMain>
  );
};

export default Basket;
