import React, { memo } from 'react';
import { useList } from 'effector-react';
import { $filterList } from '~/features/CategoryPage/store';
import * as S from './elements';
import Filter from './components/Filter';

const Filters = () => {
  const filterList = useList($filterList, (filter) => (
    <Filter title={filter.title} values={filter.values} />
  ));

  return (
    <S.FiltersWrapper>
      <S.FiltersList>{filterList}</S.FiltersList>
    </S.FiltersWrapper>
  );
};

export default memo(Filters);
