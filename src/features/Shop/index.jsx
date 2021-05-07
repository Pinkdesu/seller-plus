import React from 'react';
import * as S from './elements';
import SearchBar from '~/features/SearchBar';
import Categories from './components/Categories';
import PopularProducts from './components/PopularProducts';

const Shop = () => {
  return (
    <S.Main>
      <SearchBar />
      <Categories />
      <PopularProducts />
    </S.Main>
  );
};

export default Shop;
