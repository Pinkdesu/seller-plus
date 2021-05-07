import React from 'react';
import * as S from '../elements';
import { MenuHamburger } from '~/features/Header/elements';
import { ReactComponent as BackArrowSVG } from '~/assets/images/common/left-arrow.svg';
import { ReactComponent as SearchSVG } from '~/assets/images/common/search.svg';

const MobileSearchBar = () => {
  return (
    <S.MobileSearchBar>
      <S.MobileSearchButton>
        <MenuHamburger />
      </S.MobileSearchButton>
      {false && (
        <S.MobileBackArrow>
          <BackArrowSVG />
        </S.MobileBackArrow>
      )}
      <S.MobileTitle>Магазин</S.MobileTitle>
      <S.SearchButton>
        <SearchSVG />
      </S.SearchButton>
    </S.MobileSearchBar>
  );
};

export default MobileSearchBar;
