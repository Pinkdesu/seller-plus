import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import '../style.scss';

const Section = (props) => {
  const { icon, text, path = '/' } = props;

  return (
    <div className="menu-item">
      <NavLink className="menu-item__link" to={path}>
        <span className="menu-item__icon">{icon}</span>
        {text}
      </NavLink>
    </div>
  );
};

export default memo(Section);
