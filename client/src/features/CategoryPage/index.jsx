import React from 'react';
import * as S from './elements';
import { useStore } from 'effector-react';
import { $productsList } from '~/features/Shop/store';
import SearchBar from '~/features/SearchBar';
import Filters from '~/features/Filters';
import Product from '~/features/Product';

const ShopCategory = () => {
  const products = useStore($productsList);

  return (
    <S.ShopCategory>
      <SearchBar />
      <Filters />
      <S.Content>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </S.Content>
    </S.ShopCategory>
  );
};

export default ShopCategory;
