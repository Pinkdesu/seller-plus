import React from 'react';
import * as S from '../elements';

const Category = (props) => {
  const { className, image, name } = props;

  return (
    <S.Category className={className}>
      <S.CategoryContent to="/">
        <div>
          <S.CategoryImage src={image} alt={name} />
        </div>
        <div>
          <S.CategoryName>{name}</S.CategoryName>
        </div>
      </S.CategoryContent>
    </S.Category>
  );
};

export default Category;
