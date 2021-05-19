import React, { memo } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const Slide = (props) => {
  const locale = useLocale();

  const { title, subtitle, image } = props;

  return (
    <S.Slide className="keen-slider__slide" image={image}>
      {(title || subtitle) && (
        <S.TitleWrapper>
          <S.Title>{locale(title)}</S.Title>
          <S.Subtitle>{locale(subtitle)}</S.Subtitle>
        </S.TitleWrapper>
      )}
    </S.Slide>
  );
};

export default memo(Slide);
