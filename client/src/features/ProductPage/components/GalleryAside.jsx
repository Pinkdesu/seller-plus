import React from 'react';
import * as S from '../elements';
import ThumbnailsItem from './ThumbnailsItem';

const GalleryAside = () => {
  return (
    <S.GalleryAsideWrapper>
      <S.Thumbnails>
        <ThumbnailsItem />
        <ThumbnailsItem />
      </S.Thumbnails>
    </S.GalleryAsideWrapper>
  );
};

export default GalleryAside;
