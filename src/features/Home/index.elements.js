import styled from 'styled-components';
import amur from '~/assets/images/home/amur.jpg';

export const Main = styled.main``;

export const PrimarySection = styled.section`
  height: 100vh;
  background: url(${amur}) top/cover no-repeat;
`;

export const HeaderBlock = styled.div`
  position: relative;
  width: 70%;
  padding-left: 30px;
  top: 20vh;
`;

export const Header = styled.h1`
  color: #fff;
  margin: 0;
`;
