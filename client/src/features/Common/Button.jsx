import React from 'react';
import * as S from './elements';

const Button = (props) => {
  const { onClick, text } = props;

  return <S.Button onClick={onClick}>{text}</S.Button>;
};

export default Button;
