import React, { memo } from 'react';
import * as S from '../elements';
import { ACCOUNT_NAV } from '../constants';
import NavItem from './NavItem';

const AccountNav = () => {
  return (
    <S.LeftSide>
      <S.LeftSideHeader>
        <S.HeaderContent>
          <S.Header>Тимур Рожков</S.Header>
        </S.HeaderContent>
      </S.LeftSideHeader>
      <S.LeftSideNav>
        <S.NavList>
          {ACCOUNT_NAV.map((info, index) => (
            <NavItem
              key={index}
              path={info.path}
              text={info.text}
              image={info.image}
            />
          ))}
        </S.NavList>
      </S.LeftSideNav>
    </S.LeftSide>
  );
};

export default memo(AccountNav);
