import React from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from './elements';
import { SOTIALS_LINKS } from './constants';
import { ReactComponent as VkSVG } from '~/assets/images/footer/vk.svg';

const Footer = () => {
  const locale = useLocale();

  return (
    <S.Footer>
      <S.FooterTopSide>
        <S.SocialsWrapper>
          <S.SocialNetwor href={SOTIALS_LINKS.vk}>
            <VkSVG />
          </S.SocialNetwor>
        </S.SocialsWrapper>
        <S.Info>
          <p>{locale('contactDetails')}</p>
          <address>
            {locale('email')}:{' '}
            <a href="mailto:oootsg@mail.ru">oootsg@mail.ru</a>
          </address>
          <address>
            {locale('telephone')}:{' '}
            <a href="tel:+73452591515">+7 (3452) 59-15-15</a>
          </address>
        </S.Info>
      </S.FooterTopSide>
      <S.FooterBottomSide>
        <p>{locale('footer.companyDescriprion')}</p>
        <p>
          Copyright © <time dateTime="2021">2021</time>
        </p>
      </S.FooterBottomSide>
    </S.Footer>
  );
};

export default Footer;
