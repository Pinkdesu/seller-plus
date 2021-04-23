import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const Section = (props) => {
  const locale = useLocale();

  const { children, title } = props;

  return (
    <S.Section>
      <S.SectionHeader>{locale(title)}</S.SectionHeader>
      <S.SectionContent>{children}</S.SectionContent>
    </S.Section>
  );
};

export default Section;
