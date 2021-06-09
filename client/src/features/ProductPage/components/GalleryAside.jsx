import React from 'react';
import * as S from '../elements';
import ThumbnailsItem from './ThumbnailsItem';

const GalleryAside = (props) => {
  const { images, toggleCurrentSlide, currentImage, loading } = props;

  return (
    <S.GalleryAsideWrapper>
      <S.Thumbnails loading={loading}>
        {images.map((image, index) => (
          <ThumbnailsItem
            key={index}
            id={index}
            image={image}
            active={currentImage === index}
            toggleCurrentSlide={toggleCurrentSlide}
          />
        ))}
      </S.Thumbnails>
    </S.GalleryAsideWrapper>
  );
};

export default GalleryAside;
