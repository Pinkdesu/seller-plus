import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';
import Product from './Product';
import category1 from '~/assets/images/shop/category1.png';

const PopularProducts = () => {
  const locale = useLocale();

  return (
    <S.PopularProducts>
      <S.HeaderWrapper>
        <S.Header>{locale('shop.popularProducts')}</S.Header>
      </S.HeaderWrapper>
      <S.Products>
        {[...Array(20)].map((_, index) => (
          <Product
            key={index}
            id={index}
            image={category1}
            name="BAXI 100+ ULTRA"
            price="150000"
          />
        ))}
      </S.Products>
    </S.PopularProducts>
  );
};

export default PopularProducts;
