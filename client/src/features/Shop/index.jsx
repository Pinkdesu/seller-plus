import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { getCategories } from './store/events';
import { $categoriesList } from './store';
import * as S from './elements';
import SearchBar from '~/features/SearchBar';
import Categories from './components/Categories';
import PopularProducts from './components/PopularProducts';

const Shop = () => {
  const categories = useStore($categoriesList);

  useEffect(() => {
    if (!categories.length) {
      getCategories();
    }
  }, [categories]);

  return (
    <S.Main>
      <SearchBar />
      <Categories categories={categories} />
      <PopularProducts />
    </S.Main>
  );
};

export default Shop;
