import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { useParams } from 'react-router-dom';
import { $product } from '~/features/Shop/store';
import { getProductById, resetProduct } from '~/features/Shop/store/events';
import * as S from './elements';
import GallerySlider from './components/GallerySlider';
import LayoutAside from './components/LayoutAside';
import ProductDetails from './components/ProductDetails';
//import { PRODUCTS, DETAILS } from '../Shop/constants';

const ProductPage = () => {
  const { id } = useParams();

  const product = useStore($product);
  const isLoading = useStore(getProductById.pending);
  const {
    images,
    imageMain,
    description,
    info,
    name,
    count,
    price,
    brand,
  } = product;

  useEffect(() => {
    getProductById(id);

    return () => resetProduct();
  }, [id]);

  return (
    <S.ProductPage>
      <S.ProductSection>
        <S.ProductLayout>
          <GallerySlider images={images} isLoading={isLoading} />
          <LayoutAside
            id={id}
            name={name}
            brand={brand}
            count={count}
            price={price}
            imageMain={imageMain}
          />
        </S.ProductLayout>
      </S.ProductSection>
      <S.ProductSection>
        <S.ProductLayout>
          <ProductDetails description={description} details={info} />
        </S.ProductLayout>
      </S.ProductSection>
    </S.ProductPage>
  );
};

export default ProductPage;
