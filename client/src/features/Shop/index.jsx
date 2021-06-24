import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { getCategories } from './store/events';
import { $isCategories } from './store';
import * as S from './elements';
import SearchBar from '~/features/SearchBar';
import Categories from './components/Categories';
import PopularProducts from './components/PopularProducts';

const Shop = () => {
  const isCategories = useStore($isCategories);

  useEffect(() => {
    if (!isCategories) {
      getCategories();
    }
  }, [isCategories]);

  return (
    <S.Main>
      <SearchBar />
      <Categories />
      <PopularProducts />
    </S.Main>
  );
};

export default Shop;
