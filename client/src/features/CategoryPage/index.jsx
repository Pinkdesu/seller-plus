import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import { $productsList } from '~/features/Shop/store';
import {
  getProductsByCategory,
  getFilters,
} from '~/features/Shop/store/events';
import * as S from './elements';
import SearchBar from '~/features/SearchBar';
import Filters from '~/features/Filters';
import Product from '~/features/Product';

const ShopCategory = () => {
  const { id } = useParams();
  const products = useStore($productsList);

  useEffect(() => {
    getFilters();
    getProductsByCategory({ categoryId: id });
  }, [id]);

  return (
    <S.ShopCategory>
      <SearchBar />
      <Filters />
      <S.Content>
        {products.map((product) => (
          <Product key={product.id} {...product}>
            <Product.Brand />
            <Product.Name />
            <Product.Price />
          </Product>
        ))}
      </S.Content>
    </S.ShopCategory>
  );
};

export default ShopCategory;
