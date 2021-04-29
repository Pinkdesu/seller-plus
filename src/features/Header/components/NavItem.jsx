import React, { memo } from 'react';
import * as S from '../elements';

const NavItem = (props) => {
  const { path, text, exact = false } = props;

  return (
    <S.ActiveLink to={path} exact={exact}>
      {text}
    </S.ActiveLink>
  );
};

export default memo(NavItem);
