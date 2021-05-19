import React, { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import * as S from '../elements';
import Slide from '../../Home/components/Slide';
import GalleryAside from './GalleryAside';
import { ReactComponent as ArrowSVG } from '~/assets/images/shop/right-arrow.svg';
import { SLIDER_CONFIG } from '../constants';
import 'keen-slider/keen-slider.min.css';

const GallerySlider = (props) => {
  const { images } = props;

  const [currrentSlide, setCurrentSlide] = useState(SLIDER_CONFIG.initial);

  const [sliderRef, slider] = useKeenSlider({
    ...SLIDER_CONFIG,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const toggleCurrentSlide = (slideNumber) => {
    slider.moveToSlide(+slideNumber, 0);
  };

  const moveLeft = () => slider.prev();

  const moveRight = () => slider.next();

  return (
    <S.GalleryContent>
      <S.ProductGallery>
        <GalleryAside
          currentImage={currrentSlide}
          toggleCurrentSlide={toggleCurrentSlide}
          images={images}
        />
        <S.SliderWrapper>
          <div ref={sliderRef} className="keen-slider">
            {images.map((image, index) => (
              <Slide key={index} image={image} />
            ))}
          </div>
          {slider && (
            <>
              <S.ArrowLeft onClick={moveLeft}>
                <ArrowSVG />
              </S.ArrowLeft>
              <S.ArrowRight onClick={moveRight}>
                <ArrowSVG />
              </S.ArrowRight>
            </>
          )}
        </S.SliderWrapper>
      </S.ProductGallery>
    </S.GalleryContent>
  );
};

export default GallerySlider;
