import styled, { css } from 'styled-components';

const commonTitleStyle = css`
  color: #ffffff;
  letter-spacing: 0.1em;
  overflow-wrap: break-word;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const commonBlockStyle = css`
  position: relative;
  height: 100vh;
`;

export const Main = styled.main`
  background: #ffffff;
`;

export const SliderSection = styled.section`
  ${commonBlockStyle}
`;

export const Slide = styled.article`
  ${commonBlockStyle}
  background: url(${(props) => props.image}) top/cover no-repeat;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 45%;
  transform: translateY(-45%);
  padding: 0 20px;
  max-width: 100%;
`;

export const Title = styled.h1`
  ${commonTitleStyle}
  position: relative;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
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
`;

export const Subtitle = styled.h2`
  ${commonTitleStyle}
  padding: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
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
  background: ${(props) => (props.active ? '#C0B3B3' : '#FFFFFF')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

export const Section = styled.section``;

export const SectionHeader = styled.h1`
  ${commonTitleStyle}
  color: #000;
  font-size: 28px;
  font-weight: 400;
  padding: 60px 0;
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
`;

export const CardImageThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .services-list__card & {
    & > img {
      width: 100%;
      height: 200px;
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
`;

export const CardTextWrapper = styled.div`
  .services-list__card & {
    padding: 20px 24px 40px 24px;
  }

  .advantages-list__card & {
    padding: 5px 15px;

    & > p {
      text-align: center;
    }
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
