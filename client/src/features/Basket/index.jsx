import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { useStringNumber } from '~/utils/useStringNumber';
import { $basket } from './store';
import * as S from './elements';
import CartProduct from '~/features/Header/components/CartProduct.jsx';

const Basket = () => {
  const locale = useLocale();

  const { products, totalPrice } = useStore($basket);

  const formatedPrice = useStringNumber(totalPrice);

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
              </S.BasketProducts>
              <S.MoneySum>
                <h3>
                  {locale('totalPrice')}{' '}
                  {locale('priceWithCurrency', { price: formatedPrice })}
                </h3>
              </S.MoneySum>
            </S.ContentHolders>
          </S.BasketContent>
          <S.LeftSideWrapper>
            <S.LeftSide>
              <S.LeftSideTotal>
                <S.Totalheader>{locale('total')}</S.Totalheader>
                <S.Cost>
                  <span>{locale('totalPrice')}</span>
                  <span>
                    {locale('priceWithCurrency', { price: formatedPrice })}
                  </span>
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
