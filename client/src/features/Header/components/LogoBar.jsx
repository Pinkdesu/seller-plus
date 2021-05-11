import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import * as S from '../elements';

const LogoBar = (props) => {
  const { image } = props;

  return (
    <S.LogoBar>
      <Link to="/">
        <img src={image} alt="logo" />
      </Link>
    </S.LogoBar>
  );
};

export default memo(LogoBar);
