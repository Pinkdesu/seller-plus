import styled, { css } from 'styled-components';

const commonTitleStyle = css`
  color: #ffffff;
  letter-spacing: 0.1em;
  overflow-wrap: break-word;
  margin: 0;
  padding: 0;
  text-align: center;
`;

export const Main = styled.main`
  background: #ffffff;
`;

export const SliderSection = styled.section`
  position: relative;
  height: 100vh;

  & .keen-slider {
    height: inherit;
  }
`;

export const Slide = styled.article`
  background: url(${(props) => props.image}) top/cover no-repeat;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 45%;
  transform: translateY(-45%);
  padding: 5%;
  padding-right: 2%;
  max-width: 60%;

  @media (max-width: 480px) {
    padding: 0 20px;
    max-width: 100%;
  }
`;

export const Title = styled.h1`
  ${commonTitleStyle}
  position: relative;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.1;
  padding: 15px 0;

  &:after {
    content: '';
    height: 1px;
    margin: 0 auto;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff99;
  }

  @media (min-width: 1280px) {
    font-size: 7vw;
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    font-size: 400%;
  }

  @media (max-width: 992px) {
    font-size: 340%;
  }
`;

export const Subtitle = styled.h2`
  ${commonTitleStyle}
  padding: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1;

  @media (min-width: 992px) {
    font-size: 1.5vw;
    margin-top: 1.25em;
  }
`;

export const DotsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 6vh;
  transform: translateX(-50%);
`;

export const Dot = styled.button`
  border: none;
  outline: none;
  width: 12px;
  height: 12px;
  background: ${(props) => (props.active ? '#FFFFFF' : '#C0B3B3')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

export const Section = styled.section`
  background: #ffffff;

  &.companies-list {
    background: #2f4c78;
  }
`;

export const SectionHeader = styled.h1`
  ${commonTitleStyle}
  color: #000000;
  font-size: 32px;
  font-weight: 400;
  padding: 60px 0;

  .companies-list & {
    color: #ffffff;
    font-size: 26px;
    font-weight: 600;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 20px;
`;

export const Card = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: #ffffff;
  position: relative;
  margin-bottom: 40px;

  &.services-list__card {
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.25), 0 5px 7px rgba(0, 0, 0, 0.22);
  }

  &.companies-list__card {
    background: #2f4c78;
  }

  &.reviews-list__card {
    border: 1px solid #3144382b;
    padding: 25px;
  }
`;

export const CardImageThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .companies-list__card & {
    background: #2f4c78;

    & > img {
      max-width: 350px;
      max-height: 100px;
    }
  }

  .services-list__card & > img {
    width: 100%;
    height: 200px;
  }

  .advantages-list__card & {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding: 10px;
    background: #c7cee1;

    & > img {
      width: 80%;
      height: 80%;
    }
  }

  .reviews-list__card & {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #c7cee1;

    & > img {
      width: inherit;
      height: inherit;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

export const CardTextWrapper = styled.div`
  .services-list__card & {
    padding: 20px 25px 40px 25px;
  }

  .advantages-list__card & {
    padding: 5px 25px;

    & > p {
      text-align: center;
    }
  }

  .reviews-list__card & > h2 {
    font-size: 1.35rem;
  }
`;

export const CardTitle = styled(Title)`
  color: #000000;
  font-size: 1.75rem;
  font-weight: 400;
  padding: 0;

  &:after {
    background-color: #bbbbbb;
    width: 50%;
  }
`;

export const CardDescription = styled.p`
  font-weight: 400;
  color: #999999;
  font-size: 1.1rem;
  margin-top: 15px;
  margin-bottom: 0;
`;
