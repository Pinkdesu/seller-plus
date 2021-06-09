import styled, { css } from 'styled-components';
import Button from '~/features/Common/Button';
import { loadingAnimation } from '~/assets/style/animation';
import { Slide } from '~/features/Home/elements';
import { ImageWrapper } from '~/features/Common/elements';

export const ProductPage = styled.main`
  margin-top: 150px;

  & > * {
    font-size: 14px;
    line-height: 1.3;
    letter-spacing: 0.4px;
    color: #2d2d2d;
    font-weight: 400;
  }
`;

export const ProductSection = styled.section`
  min-width: 100%;
`;

export const ProductLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 960px;
  position: relative;
`;

export const GalleryContent = styled.div`
  width: 66.64%;
`;

export const ProductGallery = styled.div`
  display: flex;
  position: relative;
  padding: 0 10px;
  margin-bottom: 30px;
  width: 100%;
`;

export const GalleryAsideWrapper = styled.div`
  flex-basis: 13.2%;
  flex-grow: 1;
  position: relative;
`;

export const Thumbnails = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 10px;
  padding-right: 17px;
  margin-top: 20px;
`;

export const ThumbnailsItem = styled.li``;

export const ThumbnailsItemButton = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  box-shadow: ${(props) => (props.active ? '0 0 3px 1px #0770cf' : 'none')};
  background-color: ${({ theme }) => theme.white};

  & ${ImageWrapper} {
    border: 2px solid ${({ theme }) => theme.white};
    height: 52px;
    width: 40px;
    max-width: 40px;
    padding-top: 100%;
  }
`;

export const SliderWrapper = styled.div`
  position: relative;
  margin-right: 4%;
  flex: 1 0 82.6%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.white};
  ${(props) => props.isLoading && loadingAnimation}

  .keen-slider {
    height: 650px;
  }

  & ${Slide} {
    background-size: contain;
  }
`;

export const ArrowRight = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  cursor: pointer;
  background: none;
  padding: 30px 15px 30px 40px;
  transform: translateY(-50%);

  svg {
    width: 30px;
    height: 30px;
    fill: #2d2d2d99;
  }

  &:hover svg {
    fill: #2d2d2d;
  }
`;

export const ArrowLeft = styled(ArrowRight)`
  padding: 30px 40px 30px 15px;
  right: auto;
  left: 0;

  & > svg {
    transform: rotate(180deg);
  }
`;

export const LayoutAside = styled.div`
  margin-top: 25px;
  padding: 0 10px;
  min-height: 1px;
  width: 33.32%;
`;

export const AsideContent = styled.div`
  padding: 0 0 156px;
  padding-bottom: 180px;
  min-height: 629px;
  position: relative;
  width: 100%;
`;

export const ProductHero = styled.div`
  position: relative;
`;

export const ProductName = styled.h1`
  margin: 0;
  font-size: 20px;
  padding-bottom: 12px;
`;

export const ProductPrice = styled.div`
  position: relative;
  padding: 2px 0 8px 0;

  & > span {
    font-size: 20px;
    line-height: 1.1;
    letter-spacing: 2.8px;
    font-style: normal;
    font-weight: 700;
    color: #555;
  }
`;

export const Delivery = styled.div`
  & > span {
    border-bottom: 1px solid #999;
  }
`;

export const ProductSettings = styled.div`
  width: 100%;
`;

export const ProductCount = styled.div`
  margin-bottom: 5px;
  margin-top: 5px;
  padding-top: 10px;
`;

export const CountLabel = styled.div`
  text-align: left;

  & > label {
    font-size: 12px;
    line-height: 1.7;
    letter-spacing: 1.7px;
    text-transform: uppercase;
    vertical-align: bottom;
    font-weight: 700;
    padding-right: 6px;
  }
`;

export const CountSelect = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  position: relative;
  padding-top: 9px;
  gap: 8px;
`;

export const CountInput = styled.input`
  width: calc(100% - 80px);
  padding: 7px 9px;
  border: solid 1px #999;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const CountButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 32px;
  height: 32px;
  background-color: #eeeeee;
  border-radius: 50%;
  font-size: 24px;
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const AddButton = styled(Button)`
  font-weight: 700;
  letter-spacing: 2px;
  height: 41px;
`;

export const ProductDetails = styled(ProductSettings)``;

export const ProductDetailsContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  transition: max-height 1s ease-out;
  padding-bottom: 120px;
  max-height: ${(props) => (props.showAll ? '1000px' : '120px')};
  box-sizing: content-box;
`;

export const ShowMoreWrapper = styled.div`
  width: 100%;
  height: 126px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.8) 12%,
    rgba(255, 255, 255, 0.9) 34%,
    rgba(255, 255, 255, 0.96) 57%,
    #fff 73%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 );
  text-align: center;
`;

export const FadeBlock = styled.div``;

export const FadeButton = styled.button`
  margin: 0 auto;
  margin-top: 51px;
  padding: 5px 57px;
  border: 2px solid #ddd;
  line-height: 1.7;
  letter-spacing: 0.4px;
  background-color: #ffffff;
  min-width: 106px;
  text-transform: uppercase;
  line-height: 22px;
  font-weight: 700;
`;

export const DetailDecriptionWrapper = styled.div`
  min-height: 1px;
  padding: 5px 0;
`;

export const DescriptionTitle = styled.h2`
  color: ${({ theme }) => theme.gray6};
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 20px;
  font-size: 18px;
  line-height: 1.7;
  letter-spacing: 2px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const SpecificationsWrapper = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const Specification = styled.li`
  flex: 0 0 calc((100% / 3) - 20px);

  & > span {
    font-size: 16px;

    &:nth-child(1) {
      font-weight: 700;
      margin-right: 10px;
    }

    &:nth-child(2) {
      margin-right: 5px;
    }
  }
`;
