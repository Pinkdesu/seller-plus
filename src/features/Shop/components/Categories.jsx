import React from 'react';
import { CATEGORIES } from '../constants';
import * as S from '../elements';
import Category from './Category';

const Categories = () => {
  return (
    <S.Categories>
      {CATEGORIES.map((category) => (
        <Category
          key={category.id}
          id={category.id}
          name={category.name}
          image={category.image}
        />
      ))}
    </S.Categories>
  );
};

export default Categories;
