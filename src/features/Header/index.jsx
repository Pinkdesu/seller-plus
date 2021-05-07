import React, { useState, useEffect, useCallback } from 'react';
import * as S from './elements';
import LeftSideMenu from './components/LeftSideMenu';
import TopSideMenu from './components/TopSideMenu';
import { CLIENT_HEIGHT } from './constants';

const Header = (props) => {
  const { headerHiddenFromStart } = props;

  const [open, setOpen] = useState(false);
  const [topHidden, setTopHidden] = useState(headerHiddenFromStart);

  const handleScroll = useCallback(() => {
    if (window.matchMedia('(min-width: 992px)').matches) {
      const pageYOfffset = window.pageYOffset;

      if (pageYOfffset >= CLIENT_HEIGHT && topHidden) {
        setTopHidden(false);
        setOpen(false);
      }

      if (pageYOfffset < CLIENT_HEIGHT && !topHidden) {
        setTopHidden(true);
      }
    }
  }, [topHidden]);

  useEffect(() => {
    if (headerHiddenFromStart) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, headerHiddenFromStart]);

  useEffect(() => setTopHidden(headerHiddenFromStart), [headerHiddenFromStart]);

  const toggleMenu = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return (
    <S.Header open={open}>
      {headerHiddenFromStart && (
        <S.MenuButton onClick={toggleMenu}>
          <S.MenuHamburger open={open} />
        </S.MenuButton>
      )}
      <LeftSideMenu toggleMenu={toggleMenu} open={open} />
      <TopSideMenu hidden={topHidden} />
    </S.Header>
  );
};

export default Header;
