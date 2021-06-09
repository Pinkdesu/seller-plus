import React from 'react';
import * as S from '../elements';
import ImageThumb from '~/features/Common/ImageThumb';

const ThumbnailsItem = (props) => {
  const { id, image, active, toggleCurrentSlide } = props;

  const handleClick = () => {
    toggleCurrentSlide(id);
  };

  return (
    <S.ThumbnailsItem>
      <S.ThumbnailsItemButton onClick={handleClick} active={active}>
        <ImageThumb image={image} />
      </S.ThumbnailsItemButton>
    </S.ThumbnailsItem>
  );
};

export default ThumbnailsItem;
