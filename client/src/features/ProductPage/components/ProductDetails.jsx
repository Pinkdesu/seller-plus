import React, { useState } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const ProductDetails = (props) => {
  const locale = useLocale();

  const { description, details } = props;

  const [showAll, setShowAll] = useState(false);

  const toggleVisibility = () => {
    setShowAll(!showAll);
  };

  const buttonText = showAll ? 'hide' : 'showMore';

  return (
    <S.ProductDetails>
      <S.ProductDetailsContainer showAll={showAll}>
        <S.DetailDecriptionWrapper>
          <div>
            <S.DescriptionTitle>{locale('description')}</S.DescriptionTitle>
          </div>
          <div>
            <S.Description>{description}</S.Description>
          </div>
        </S.DetailDecriptionWrapper>
        <S.DetailDecriptionWrapper>
          <div>
            <S.DescriptionTitle>{locale('specifications')}</S.DescriptionTitle>
          </div>
          <S.SpecificationsWrapper>
            {details.map((detail, index) => (
              <S.Specification key={index}>
                <span>{detail.name}:</span>
                <span>{detail.value}</span>
                <span>{detail.unit}</span>
              </S.Specification>
            ))}
          </S.SpecificationsWrapper>
        </S.DetailDecriptionWrapper>
        <S.ShowMoreWrapper>
          <S.FadeBlock>
            <S.FadeButton onClick={toggleVisibility}>
              {locale(buttonText)}
            </S.FadeButton>
          </S.FadeBlock>
        </S.ShowMoreWrapper>
      </S.ProductDetailsContainer>
    </S.ProductDetails>
  );
};

export default ProductDetails;
