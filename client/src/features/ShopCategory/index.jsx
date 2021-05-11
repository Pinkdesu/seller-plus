import React from 'react';
import * as S from './elements';
import SearchBar from '~/features/SearchBar';
import Filters from '~/features/Filters';
import Product from '~/features/Shop/components/Product';
import category1 from '~/assets/images/shop/category1.png';

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
            image={category1}
            name="BAXI 100+ ULTRA"
            price="150000"
          />
        ))}
      </S.Content>
    </S.ShopCategory>
  );
};

export default ShopCategory;
