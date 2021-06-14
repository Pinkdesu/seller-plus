import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useStore } from 'effector-react';
import { $popularProductsList } from '../store';
import * as S from '../elements';
import Product from '~/features/Product';

const PopularProducts = () => {
  const locale = useLocale();

  const popularProducts = useStore($popularProductsList);

  return (
    <S.PopularProducts>
      <S.HeaderWrapper>
        <S.Header>{locale('shop.popularProducts')}</S.Header>
      </S.HeaderWrapper>
      <S.Products>
        {popularProducts.map((product) => (
          <Product key={product.id} {...product} imageMain={product.image}>
            <Product.Brand />
            <Product.Name />
            <Product.Price />
          </Product>
        ))}
      </S.Products>
    </S.PopularProducts>
  );
};

export default PopularProducts;
