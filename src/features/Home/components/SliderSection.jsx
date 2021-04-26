import React, { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { SLIDER_CONFIG, DELAY } from '../constants';
import * as S from '../elements';
import Slide from './Slide';
import 'keen-slider/keen-slider.min.css';

const SliderSection = (props) => {
  const { slides } = props;

  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider({
    ...SLIDER_CONFIG,
    slideChanged: (s) => {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    let timer = setTimeout(() => {
      if (slider) {
        slider.next();
      }
    }, DELAY);

    return () => clearInterval(timer);
  }, [slider, currentSlide]);

  return (
    <S.SliderSection>
      <div className="keen-slider" ref={sliderRef}>
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
          {[...Array(slider.details().size).keys()].map((num) => (
            <S.Dot
              key={num}
              onClick={() => slider.moveToSlideRelative(num)}
              active={currentSlide === num}
            />
          ))}
        </S.DotsWrapper>
      )}
    </S.SliderSection>
  );
};

export default SliderSection;
