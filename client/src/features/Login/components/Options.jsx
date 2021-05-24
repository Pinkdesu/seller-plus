import React from 'react';
import { useLocale } from '~/utils/useLocale';
import { useLocation } from 'react-router';
import * as S from '../elements';
import { REG_PATH, LOG_PATH } from '../constants';

const Options = () => {
  const locale = useLocale();
  const location = useLocation();

  return (
    <S.OptionsWrapper>
      <S.TitleWrapper active={location.pathname === REG_PATH}>
        <S.OptionsLink to={REG_PATH}>{locale('registration')}</S.OptionsLink>
      </S.TitleWrapper>
      <S.TitleWrapper active={location.pathname === LOG_PATH}>
        <S.OptionsLink to={LOG_PATH}>{locale('enter')}</S.OptionsLink>
      </S.TitleWrapper>
    </S.OptionsWrapper>
  );
};

export default Options;
