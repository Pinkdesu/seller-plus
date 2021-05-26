import React from 'react';
import * as S from './elements';
import Filter from './components/Filter';

const Filters = () => {
  return (
    <S.FiltersWrapper>
      <S.FiltersList>
        <Filter title="Фильтр1" />
        <Filter title="Фильтр2" />
        <Filter title="Фильтр3" />
        <Filter title="Фильтр4" />
      </S.FiltersList>
    </S.FiltersWrapper>
  );
};

export default Filters;
