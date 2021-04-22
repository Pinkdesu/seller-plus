import styled, { css } from 'styled-components';

const commonTitleStyle = css`
  color: #ffffff;
  letter-spacing: 0.1em;
  overflow-wrap: break-word;
  margin: 0;
  padding: 0;
`;

const commonBlockStyle = css`
  position: relative;
  height: 100vh;
`;

export const Main = styled.main``;

export const SliderSection = styled.section`
  ${commonBlockStyle}
`;

export const Slider = styled.section``;

export const Slide = styled.article`
  ${commonBlockStyle}
  background: url(${(props) => props.image}) top/cover no-repeat;
`;

export const TitleWrapper = styled.div`
  position: absolute;
  top: 45%;
  transform: translateY(-45%);
  text-align: center;
  padding: 0 40px;
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
    background-color: #fff;
    opacity: 0.6;
  }
`;

export const Subtitle = styled.h2`
  ${commonTitleStyle}
  padding: 10px 0;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
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
