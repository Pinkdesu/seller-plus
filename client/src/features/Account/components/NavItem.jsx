import React, { memo } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const NavItem = (props) => {
  const locale = useLocale();

  const { text, path, image } = props;

  return (
    <S.ListItem>
      <S.ItemLink to={path} exact>
        <S.LinkIconWrapper>
          <S.IconWrap>
            <S.Icon src={image} />
          </S.IconWrap>
        </S.LinkIconWrapper>
        <S.LinkTextWrapper>
          <S.Text>{locale(text)}</S.Text>
        </S.LinkTextWrapper>
      </S.ItemLink>
    </S.ListItem>
  );
};

export default memo(NavItem);
