import React, { memo } from 'react';
import * as S from './elements';

const ImageThumb = (props) => {
  const { image } = props;

  return (
    <S.ImageWrapper>
      <S.Image src={image} />
    </S.ImageWrapper>
  );
};

export default memo(ImageThumb);
