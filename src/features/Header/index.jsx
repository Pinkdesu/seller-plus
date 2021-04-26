import React, { useState } from 'react';
import * as S from './elements';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <S.Header>
      <S.MenuButton onClick={handleOpen}>
        <S.MenuHamburger open={open} />
      </S.MenuButton>
    </S.Header>
  );
};

export default Header;
