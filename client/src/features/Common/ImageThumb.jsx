import React, { memo } from 'react';
import * as S from './elements';

const ImageThumb = (props) => {
  const { image, children, ...other } = props;

  return (
    <S.ImageWrapper>
      <S.Image src={image} {...other} />
      {children}
    </S.ImageWrapper>
  );
};

export default memo(ImageThumb);
