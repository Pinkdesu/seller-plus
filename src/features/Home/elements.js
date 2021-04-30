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
  padding: 0 20px;
  max-width: 100%;

  @media (min-width: 992px) {
    padding: 5%;
    max-width: 60%;
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
    width: 50%;
    background-color: #ffffff99;
  }

  @media (min-width: 1280px) {
    font-size: 6vw;
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    font-size: 350%;
  }

  @media (max-width: 992px) {
    font-size: 280%;
  }
`;

export const Subtitle = styled.h2`
  ${commonTitleStyle}
  padding: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1;

  @media (min-width: 992px) {
    font-size: 1.3vw;
    margin-top: 1em;
    padding: 0 10%;
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
    background: #0a2248;
  }

  @media (max-width: 480px) {
    padding: 0 24px;
  }

  @media (min-width: 480px) {
    padding: 0 50px;
  }

  @media (min-width: 992px) {
    &.services-list {
      position: absolute;
      right: 3%;
      top: 80px;
      background: none;
      width: 40%;
      overflow-y: auto;
      overflow-x: hidden;
      height: calc(100vh - 130px);
      padding: 0 10px;

      ::-webkit-scrollbar {
        background-color: none;
        width: 6px;
        height: 0;
      }

      ::-webkit-scrollbar-thumb {
        background-color: none;
        border-radius: 10px;

        &:hover {
          background-color: #00000040;
        }
      }
    }
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

  @media (min-width: 992px) {
    .services-list & {
      color: #ffffff;
      text-align: left;
      padding: 10px 0 40px 0;
      font-weight: 600;
    }
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 992px) {
    .services-list & {
      justify-content: space-between;
    }
  }

  @media (max-width: 480px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: #ffffff;
  position: relative;
  margin: 0 24px 40px 24px;
  max-width: 450px;
  min-width: 250px;

  &.services-list__card {
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.25), 0 5px 7px rgba(0, 0, 0, 0.22);
    min-width: 300px;
    cursor: pointer;
    padding: 0;

    @media (min-width: 992px) {
      width: 48%;
      margin: 0;
      margin-bottom: 40px;
      transition: background 0.25s ease-in-out;
      background: #ffffffd9;

      &:hover {
        background: #ffffff;

        img {
          transform: scale(1.1);
        }
      }
    }
  }

  &.advantages-list__card {
    @media (min-width: 992px) {
      width: 20%;
    }
  }

  &.companies-list__card {
    background: #0a2248;
  }

  &.reviews-list__card {
    border: 1px solid #3144382b;
    padding: 24px;
  }
`;

export const CardImageThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .companies-list__card & {
    background: #0a2248;

    & > img {
      max-width: 350px;
      max-height: 100px;
    }
  }

  .services-list__card & {
    overflow: hidden;

    & > img {
      width: 100%;
      height: auto;
      object-fit: cover;
      transition: all 0.25s ease-in-out;
    }
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
  padding-bottom: 6px;

  &:after {
    background-color: #bbbbbb;
  }
`;

export const CardDescription = styled.p`
  font-weight: 400;
  color: #757575;
  font-size: 1.1rem;
  margin-top: 15px;
  margin-bottom: 0;
`;
