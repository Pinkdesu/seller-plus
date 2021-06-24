import React, { useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useStore, useList } from 'effector-react';
import { useScrollLoader } from '~/utils/useScrollLoader';
import { getSearchProducts, resetSearchProducts } from './store/events';
import { $productsList, $hasMore, $pageNumber } from './store';
import queryString from 'query-string';
import * as S from '~/features/CategoryPage/elements';
import { SearchQueryWrapper } from './elements';
import SearchBar from '~/features/SearchBar';
import Product from '~/features/Product';
import Loader from '~/features/Common/Loader';

const SearchPage = () => {
  const location = useLocation();
  const products = useStore($productsList);
  const hasMore = useStore($hasMore);
  const pageNumber = useStore($pageNumber);

  const { text } = useMemo(() => queryString.parse(location.search), [
    location,
  ]);

  const productsList = useList($productsList, (product) => (
    <Product {...product}>
      <Product.Brand />
      <Product.Name />
      <Product.Price />
    </Product>
  ));

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
      <SearchQueryWrapper>Поиск по запросу: {text}</SearchQueryWrapper>
      <S.Content>{!products.length ? <Loader /> : productsList}</S.Content>
    </S.ShopCategory>
  );
};

export default SearchPage;
