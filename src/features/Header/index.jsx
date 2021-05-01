import React, { useState, useEffect, useCallback } from 'react';
import * as S from './elements';
import LeftSideMenu from './components/LeftSideMenu';
import TopSideMenu from './components/TopSideMenu';
import { CLIENT_HEIGHT } from './constants';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [topHidden, setTopHidden] = useState(true);

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

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <S.Header open={open}>
      <S.MenuButton onClick={handleOpen}>
        <S.MenuHamburger open={open} />
      </S.MenuButton>
      <LeftSideMenu open={open} />
      <TopSideMenu hidden={topHidden} />
    </S.Header>
  );
};

export default Header;
