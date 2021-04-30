import React, { memo } from 'react';
import { useLocale } from '~/utils/useLocale';
import { useParallax } from '~/utils/useParallax';
import { PARALLAX_SPEED } from '../constants';
import * as S from '../elements';

const Slide = (props) => {
  const locale = useLocale();
  const slideRef = useParallax({ speed: PARALLAX_SPEED });

  const { title, subtitle, image } = props;

  return (
    <S.Slide ref={slideRef} className="keen-slider__slide" image={image}>
      <S.TitleWrapper>
        <S.Title>{locale(title)}</S.Title>
        <S.Subtitle>{locale(subtitle)}</S.Subtitle>
      </S.TitleWrapper>
    </S.Slide>
  );
};

export default memo(Slide);
