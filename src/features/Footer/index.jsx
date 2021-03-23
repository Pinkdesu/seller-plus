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
      <Section text={locale('shop')} icon={shopIcon} path="/shop" />
      <Section text={locale('rating')} icon={starIcon} path="/rating" />
      <Section text={locale('tasks')} icon={tasksIcon} path="/task" />
      <Section text={locale('profile')} icon={profileIcon} path="profile" />
    </nav>
  );
};

export default Footer;
