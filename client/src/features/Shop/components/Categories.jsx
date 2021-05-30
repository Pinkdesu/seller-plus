import React from 'react';
import * as S from '../elements';
import Category from './Category';

const Categories = (props) => {
  const { categories } = props;

  return (
    <S.Categories>
      {categories.map((category) => (
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
