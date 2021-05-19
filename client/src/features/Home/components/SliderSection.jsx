import React, { useState, useEffect, useCallback } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { SLIDER_CONFIG, DELAY, PARALLAX_SPEED } from '../constants';
import { CLIENT_HEIGHT } from '~/features/Header/constants';
import * as S from '../elements';
import Slide from './Slide';
import 'keen-slider/keen-slider.min.css';

const SliderSection = (props) => {
  const { slides } = props;

  const [currentSlide, setCurrentSlide] = useState(SLIDER_CONFIG.initial);

  const [sliderRef, slider] = useKeenSlider({
    ...SLIDER_CONFIG,
    slideChanged: (s) => {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    let timer = setInterval(() => {
      slider && slider.next();
    }, DELAY);

    return () => clearInterval(timer);
  }, [slider, currentSlide]);

  useEffect(() => {
    const items = document.querySelectorAll('.keen-slider__slide');

    const handleScroll = () => {
      const offset = window.pageYOffset;

      if (offset <= CLIENT_HEIGHT) {
        items.forEach(
          (slide) =>
            (slide.style.backgroundPositionY = `${offset * PARALLAX_SPEED}px`),
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const goToSlide = useCallback(
    (num) => () => slider.moveToSlideRelative(+num, true),
    [slider],
  );

  return (
    <S.SliderSection>
      <div ref={sliderRef} className="keen-slider">
        {slides.map((info) => (
          <Slide
            key={info.id}
            image={info.image}
            title={info.title}
            subtitle={info.subtitle}
          />
        ))}
      </div>
      {slider && (
        <S.DotsWrapper>
          {slides.map((slide, index) => (
            <S.Dot
              key={slide.id}
              onClick={goToSlide(index)}
              active={currentSlide === index}
            />
          ))}
        </S.DotsWrapper>
      )}
    </S.SliderSection>
  );
};

export default SliderSection;
