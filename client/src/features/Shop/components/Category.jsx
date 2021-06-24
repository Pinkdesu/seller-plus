import React from 'react';
import * as S from '../elements';
import Loader from '~/features/Common/Loader';

const Category = (props) => {
  const { className, image, name, id, loading = false } = props;

  if (loading) {
    return (
      <S.Category>
        <Loader />
      </S.Category>
    );
  }

  return (
    <S.Category className={className}>
      <S.CategoryContent to={`/shop/category/${id}`}>
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
