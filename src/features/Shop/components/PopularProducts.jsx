import React from 'react';
import * as S from '../elements';
import Product from './Product';
import category1 from '~/assets/images/shop/category1.png';

const PopularProducts = () => {
  return (
    <S.PopularProducts>
      <S.HeaderWrapper>
        <S.Header>Популярные товары</S.Header>
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
