import React from 'react';
import ImageThumb from '~/features/Common/ImageThumb';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const NavItem = (props) => {
  const locale = useLocale();

  const { text, path, image } = props;

  return (
    <S.ListItem>
      <S.ItemLink to={path} exact>
        <S.LinkIconWrapper>
          <ImageThumb image={image} />
        </S.LinkIconWrapper>
        <S.LinkTextWrapper>
          <S.Text>{locale(text)}</S.Text>
        </S.LinkTextWrapper>
      </S.ItemLink>
    </S.ListItem>
  );
};

export default NavItem;
