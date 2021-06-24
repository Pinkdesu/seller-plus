import React, { useEffect, useCallback } from 'react';
import { useStore, useList } from 'effector-react';
import { useParams } from 'react-router-dom';
import { useScrollLoader } from '~/utils/useScrollLoader';
import { $productsList, $hasMore, $pageNumber } from './store';
import { getProducts, getFilters, resetProducts } from './store/events';
import * as S from './elements';
import SearchBar from '~/features/SearchBar';
import Filters from '~/features/Filters';
import Product from '~/features/Product';
import Loader from '~/features/Common/Loader';

const ShopCategory = () => {
  const { id } = useParams();
  const hasMore = useStore($hasMore);
  const products = useStore($productsList);
  const pageNumber = useStore($pageNumber);

  const productsList = useList($productsList, (product) => (
    <Product {...product}>
      <Product.Brand />
      <Product.Name />
      <Product.Price />
    </Product>
  ));

  useEffect(() => {
    getFilters(id);
    getProducts({ categoryId: id });

    return () => resetProducts();
  }, [id]);

  const getMoreProducts = useCallback(() => {
    getProducts({ categoryId: id, page: pageNumber });
  }, [pageNumber, id]);

  useScrollLoader(getMoreProducts, {
    hasMore,
    perOffset: 20,
  });

  return (
    <S.ShopCategory>
      <SearchBar />
      <Filters />
      <S.Content>{!products.length ? <Loader /> : productsList}</S.Content>
    </S.ShopCategory>
  );
};

export default ShopCategory;
