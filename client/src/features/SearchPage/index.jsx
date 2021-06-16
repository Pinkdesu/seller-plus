import React, { useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore } from 'effector-react';
import { useScrollLoader } from '~/utils/useScrollLoader';
import { getSearchProducts, resetSearchProducts } from './store/events';
import { $productsList, $hasMore, $pageNumber } from './store';
import queryString from 'query-string';
import * as S from '~/features/CategoryPage/elements';
import SearchBar from '~/features/SearchBar';
import Product from '~/features/Product';

const SearchPage = () => {
  const location = useLocation();
  const products = useStore($productsList);
  const hasMore = useStore($hasMore);
  const pageNumber = useStore($pageNumber);

  const { text } = useMemo(() => queryString.parse(location.search), [
    location,
  ]);

  useEffect(() => {
    if (text) {
      getSearchProducts({ text });
    }

    return () => resetSearchProducts();
  }, [text]);

  const getMoreProducts = useCallback(() => {
    getSearchProducts({ text, page: pageNumber });
  }, [pageNumber, text]);

  useScrollLoader(getMoreProducts, {
    hasMore,
    perOffset: 20,
  });

  return (
    <S.ShopCategory>
      <SearchBar />
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

export default SearchPage;
