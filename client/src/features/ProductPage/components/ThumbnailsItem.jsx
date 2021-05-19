import React from 'react';
import * as S from '../elements';

const ThumbnailsItem = (props) => {
  const { id, image, active, toggleCurrentSlide } = props;

  const handleClick = () => {
    toggleCurrentSlide(id);
  };

  return (
    <S.ThumbnailsItem>
      <S.ThumbnailsItemButton onClick={handleClick} active={active}>
        <S.ThumbnailsItemImage src={image} />
      </S.ThumbnailsItemButton>
    </S.ThumbnailsItem>
  );
};

export default ThumbnailsItem;
