import React, { memo } from 'react';
import * as S from '../elements';

const NavItem = (props) => {
  const { path, text, exact = false } = props;

  return (
    <S.Link to={path} exact={exact}>
      {text}
    </S.Link>
  );
};

export default memo(NavItem);
