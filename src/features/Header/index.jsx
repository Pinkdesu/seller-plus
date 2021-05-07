import React, { useState, useEffect, useCallback } from 'react';
import * as S from './elements';
import LeftSideMenu from './components/LeftSideMenu';
import TopSideMenu from './components/TopSideMenu';
import { CLIENT_HEIGHT } from './constants';
import { useLocation } from 'react-router';

const Header = (props) => {
  const location = useLocation();

  const { defaultTop } = props;

  const [open, setOpen] = useState(false);
  const [topHidden, setTopHidden] = useState(defaultTop);

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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => setTopHidden(defaultTop), [defaultTop]);

  const toggleMenu = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  const isButtonHidden = location.pathname === '/shop';

  return (
    <S.Header open={open}>
      {!isButtonHidden && (
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
