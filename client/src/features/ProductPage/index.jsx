import React from 'react';
import ProductGallery from './components/ProductGallery';
import * as S from './elements';

const ProductPage = () => {
  return (
    <S.ProductPage>
      <S.ProductSection>
        <S.ProductLayout>
          <S.GalleryContent>
            <ProductGallery />
          </S.GalleryContent>
        </S.ProductLayout>
      </S.ProductSection>
    </S.ProductPage>
  );
};

export default ProductPage;
