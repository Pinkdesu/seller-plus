import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from '../elements';
import { ReactComponent as SearchSVG } from '~/assets/images/common/search.svg';
import { ReactComponent as CloseSVG } from '~/assets/images/common/close.svg';

const DesktopSearchBar = () => {
  const history = useHistory();

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;

    setValue(value);
  };

  const onSearch = () => {
    history.push(`/shop/search?text=${value}`);
  };

  const onClear = () => {
    setValue('');
  };

  const onKeyDown = (e) => {
    e.key === 'Enter' && onSearch();
  };

  return (
    <S.SearchBarWrapper>
      <S.SearchBar>
        <S.SearchField
          placeholder="Что искать..."
          value={value}
          onChange={handleChange}
          onKeyDown={onKeyDown}
        />
        <S.ClearButton onClick={onClear}>
          <CloseSVG />
        </S.ClearButton>
        <S.SearchButton onClick={onSearch}>
          <SearchSVG />
        </S.SearchButton>
      </S.SearchBar>
    </S.SearchBarWrapper>
  );
};

export default DesktopSearchBar;
