import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import Product from '~/features/Product';
import { PRODUCTS } from '../constants';

const PopularProducts = () => {
  const locale = useLocale();

  return (
    <S.PopularProducts>
      <S.HeaderWrapper>
        <S.Header>{locale('shop.popularProducts')}</S.Header>
      </S.HeaderWrapper>
      <S.Products>
        {PRODUCTS.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            count={product.count}
          />
        ))}
      </S.Products>
    </S.PopularProducts>
  );
};

export default PopularProducts;
