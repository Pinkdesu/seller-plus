import React from 'react';
import * as S from '../elements';
import { useKeenSlider } from 'keen-slider/react';
import Slide from '../../Home/components/Slide';
import 'keen-slider/keen-slider.min.css';
import test from '~/assets/images/shop/test-prod.jpg';

const GallerySlider = () => {
  const [sliderRef, slider] = useKeenSlider();

  return (
    <S.SliderWrapper>
      <div ref={sliderRef} className="keen-slider">
        <Slide image={test} />
        <Slide image={test} />
        <Slide image={test} />
      </div>
    </S.SliderWrapper>
  );
};

export default GallerySlider;
