import React from 'react';
import * as S from '../elements';
import GalleryAside from './GalleryAside';
import GallerySlider from './GallerySlider';

const ProductGallery = () => {
  return (
    <S.ProductGallery>
      <GalleryAside />
      <GallerySlider />
    </S.ProductGallery>
  );
};

export default ProductGallery;
