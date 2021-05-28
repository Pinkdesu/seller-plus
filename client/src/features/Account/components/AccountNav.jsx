import React, { memo } from 'react';
import { useStore } from 'effector-react';
import { $user } from '~/features/AppBootstrap/store';
import { ACCOUNT_NAV } from '../constants';
import * as S from '../elements';
import NavItem from './NavItem';

const AccountNav = () => {
  const {
    user: { firstName, secondName },
  } = useStore($user);

  return (
    <S.LeftSide>
      <S.LeftSideHeader>
        <S.HeaderContent>
          <S.Header>{`${firstName} ${secondName}`}</S.Header>
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
