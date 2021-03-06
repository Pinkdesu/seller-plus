import styled, { css } from 'styled-components';

const flexColumn = css`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 40px 30px 30px 30px;
  background-color: ${({ theme }) => theme.blue6};

  @media (min-width: 992px) {
    padding: 40px 25% 20px 25%;
  }

  * {
    color: ${({ theme }) => theme.white};
  }
`;

export const FooterTopSide = styled.div`
  ${flexColumn}

  & > div {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: 992px) {
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: flex-start;

    & > div {
      margin-right: 80px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export const FooterBottomSide = styled.div`
  ${flexColumn}
  text-align: center;
  margin-top: 40px;

  p {
    font-size: 14px;
    margin: 0;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const SocialsWrapper = styled.div``;

export const SocialNetwor = styled.a`
  display: inline-block;
  font-size: 0;
  margin-right: 15px;
  text-decoration: none;

  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 50px;
    height: 50px;
    height: 100%;
    fill: ${({ theme }) => theme.white};
  }
`;

export const Info = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0 20px;

  & > p {
    font-size: 20px;
    margin: 0;
    margin-bottom: 20px;
    white-space: nowrap;
    font-weight: 700;
  }

  & > address {
    font-size: 16px;
    margin-bottom: 10px;
    font-style: normal;

    &:last-child {
      margin-bottom: 0;
    }

    a {
      text-decoration: none;
    }
  }
`;
