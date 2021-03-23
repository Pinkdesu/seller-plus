import React, { memo } from 'react';
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import '../style.scss';

const Section = (props) => {
  const location = useLocation();

  const { icon, text, path = '/' } = props;

  const active = location.pathname.includes(path);

  return (
    <div className={cn('menu-item', { active })}>
      <Link className="menu-item__link" to={path}>
        <span className="menu-item__icon">{icon}</span>
        {text}
      </Link>
    </div>
  );
};

export default memo(Section);
