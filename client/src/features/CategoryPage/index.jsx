import React from 'react';
import * as S from './elements';
import SearchBar from '~/features/SearchBar';
import Filters from '~/features/Filters';
import Product from '~/features/Product';
import product from '~/assets/images/shop/product.jpg';

const ShopCategory = () => {
  return (
    <S.ShopCategory>
      <SearchBar />
      <Filters />
      <S.Content>
        {[...Array(20)].map((_, index) => (
          <Product
            key={index}
            id={index}
            image={product}
            name="BAXI 100+ ULTRA"
            price="150000"
          />
        ))}
      </S.Content>
    </S.ShopCategory>
  );
};

export default ShopCategory;
