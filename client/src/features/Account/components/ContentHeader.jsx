import React from 'react';
import { useLocale } from '~/utils/useLocale';
import ImageThumb from '~/features/Common/ImageThumb';
import * as S from '../elements';

const ContentHeader = (props) => {
  const locale = useLocale();

  const { image, title, text } = props;

  return (
    <S.ContentHeaderWrapper>
      <S.ContentHeader>
        <ImageThumb image={image} />
        <S.PageHeader>{locale(title)}</S.PageHeader>
        {text && <S.PageText>{locale(text)}</S.PageText>}
      </S.ContentHeader>
    </S.ContentHeaderWrapper>
  );
};

export default ContentHeader;
