import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const ContentHeader = (props) => {
  const locale = useLocale();

  const { image, title, text } = props;

  return (
    <S.ContentHeaderWrapper>
      <S.ContentHeader>
        <S.ImageThumb>
          <S.PageImage src={image} />
        </S.ImageThumb>
        <S.PageHeader>{locale(title)}</S.PageHeader>
        {text && <S.PageText>{locale(text)}</S.PageText>}
      </S.ContentHeader>
    </S.ContentHeaderWrapper>
  );
};

export default ContentHeader;
