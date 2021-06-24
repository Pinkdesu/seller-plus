import React from 'react';
import { useList } from 'effector-react';
import { $categoriesList } from '../store';
import * as S from '../elements';
import Category from './Category';

const Categories = () => {
  const categories = useList($categoriesList, (category) => (
    <Category {...category} />
  ));

  return <S.Categories>{categories}</S.Categories>;
};

export default Categories;
