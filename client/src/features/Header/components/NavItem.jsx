import React, { memo } from 'react';
import * as S from '../elements';

const NavItem = (props) => {
  const { path, text, exact = false, onClick } = props;

  return (
    <S.ActiveLink to={path} exact={exact} onClick={onClick}>
      {text}
    </S.ActiveLink>
  );
};

export default memo(NavItem);
