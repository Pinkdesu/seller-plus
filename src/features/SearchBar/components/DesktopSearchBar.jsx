import React from 'react';
import * as S from '../elements';
import { ReactComponent as SearchSVG } from '~/assets/images/common/search.svg';
import { ReactComponent as CloseSVG } from '~/assets/images/common/close.svg';

const DesktopSearchBar = () => {
  return (
    <S.SearchBarWrapper>
      <S.SearchBar>
        <S.SearchField placeholder="Что искать..." />
        <S.ClearButton>
          <CloseSVG />
        </S.ClearButton>
        <S.SearchButton>
          <SearchSVG />
        </S.SearchButton>
      </S.SearchBar>
    </S.SearchBarWrapper>
  );
};

export default DesktopSearchBar;
