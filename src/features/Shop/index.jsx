import React from 'react';
import * as S from './elements';
//import { MenuHamburger } from '~/features/Header/elements';
//import { ReactComponent as BackArrowSVG } from '~/assets/images/common/left-arrow.svg';
//import { ReactComponent as SearchSVG } from '~/assets/images/common/search.svg';
import MobileSearchBar from './components/MobileSearchBar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';

const Shop = () => {
  return (
    <S.Main>
      <MobileSearchBar />
      <SearchBar />
      <Categories />
    </S.Main>
  );
};

export default Shop;
