import React from 'react';
import * as S from './elements';
import { ReactComponent as LoaderSVG } from '~/assets/images/common/loader.svg';

const Loader = () => {
  return (
    <S.Loader>
      <S.LoaderSpinner>
        <LoaderSVG />
      </S.LoaderSpinner>
    </S.Loader>
  );
};

export default Loader;
