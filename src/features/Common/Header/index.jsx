import React from 'react';
import { ReactComponent as SearchSVG } from '~/assets/images/common/search.svg';
import './style.scss';

const Header = (props) => {
  const { title } = props;

  return (
    <header className="page-header">
      <h1 className="page-header__title">{title}</h1>
      <span className="page-header__icon">
        <SearchSVG />
      </span>
    </header>
  );
};

export default Header;
