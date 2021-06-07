import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { useStringNumber } from '~/utils/useStringNumber';
import { $basket } from './store';
import * as S from './elements';
import CartProduct from '~/features/Common/CartProduct.jsx';
import EmptyContent from './components/EmptyContent';
import RightSide from '~/features/Common/RightSide';

const Basket = () => {
  const locale = useLocale();

  const { products, totalPrice } = useStore($basket);

  const formatedPrice = useStringNumber(totalPrice);

  const isEmpty = !products.length;

  if (isEmpty) {
    return <EmptyContent />;
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
                  <CartProduct
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                  >
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
