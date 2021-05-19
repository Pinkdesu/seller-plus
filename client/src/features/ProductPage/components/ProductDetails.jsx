import React, { useState } from 'react';
import { useLocale } from '~/utils/useLocale';
import * as S from '../elements';

const ProductDetails = () => {
  const locale = useLocale();

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
            <S.Description>
              РусНИТ-НМ» дополняет модельный ряд электрокотлов и представляет из
              себя отопитель, у комплектованный циркуляционным
              насосом.экспанзоматом и предохранительным клапаном (модели
              205Н-209НМ) и циркуляционным насосом (модели 212Н-224Н).
              Компактная миникотельная РУСНИТ-НМ разработана специально для
              применения в поквартирном отоплении. Электрокотлы
              «РусНИТ-212Н-224Н» представляют из себя моноблок со встроенным
              теплообменником из нержавеющей стали, циркуляционным насосом и
              блоком управления. Наличие двух групп ТЭНов позволяет осуществлять
              равномерную трехступенчатую регулировку по мощности без перекоса
              фаз. За счет полупроводниковой коммутации ТЭНов электрокотел:
              допускает большее количество переключений, чем при использовании
              реле или магнитных пускателей; работает бесшумно; устойчивее
              работает при понижении напряжения питания сети на 20%; не наводит
              электро- и радиопомех. Безопасность эксплуатации котлов
              обеспечивается 4-мя уровнями защиты: -предельным датчиком
              температуры; -регулировкой температуры теплоносителя;
              -регулировкой температуры в помещении; -датчиком наличия
              теплоносителя.
            </S.Description>
          </div>
        </S.DetailDecriptionWrapper>
        <S.DetailDecriptionWrapper>
          <div>
            <S.DescriptionTitle>{locale('specifications')}</S.DescriptionTitle>
          </div>
          <S.SpecificationsWrapper>
            {[...new Array(20)].map((_, index) => (
              <S.Specification key={index}>
                <span>asdadsdasd</span>
                <span>12312</span>
                <span>asda</span>
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
