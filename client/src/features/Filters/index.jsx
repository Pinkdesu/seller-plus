import React from 'react';
import * as S from './elements';
import Filter from './components/Filter';

const Filters = () => {
  return (
    <S.FiltersWrapper>
      <S.FiltersList>
        <Filter title="Price" />
        <Filter title="Price" />
        <Filter title="Price" />
        <Filter title="Price" />
      </S.FiltersList>
    </S.FiltersWrapper>
  );
};

export default Filters;
