import React, { useMemo } from 'react';
import { useLocale } from '~/utils/useLocale';
import Section from './components/Section';
import { ReactComponent as ShopSVG } from '~/assets/images/common/shopping-cart.svg';
import { ReactComponent as StarSVG } from '~/assets/images/footer/star.svg';
import { ReactComponent as TasksSVG } from '~/assets/images/footer/tasks.svg';
import { ReactComponent as ProfileSVG } from '~/assets/images/footer/profile-user.svg';

const Footer = () => {
  const locale = useLocale();

  const shopIcon = useMemo(() => <ShopSVG />, []);
  const starIcon = useMemo(() => <StarSVG />, []);
  const tasksIcon = useMemo(() => <TasksSVG />, []);
  const profileIcon = useMemo(() => <ProfileSVG />, []);

  return (
    <nav className="menu">
      <Section text={locale('shop')} icon={shopIcon} />
      <Section text={locale('rating')} icon={starIcon} />
      <Section text={locale('myTasks')} icon={tasksIcon} />
      <Section text={locale('profile')} icon={profileIcon} />
    </nav>
  );
};

export default Footer;
