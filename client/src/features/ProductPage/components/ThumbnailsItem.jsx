import React from 'react';
import * as S from '../elements';
import test from '~/assets/images/shop/test-prod.jpg';

const ThumbnailsItem = () => {
  return (
    <S.ThumbnailsItem>
      <S.ThumbnailsItemButton>
        <S.ThumbnailsItemImage src={test} />
      </S.ThumbnailsItemButton>
    </S.ThumbnailsItem>
  );
};

export default ThumbnailsItem;
