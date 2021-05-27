import styled from 'styled-components';
import { DefaultMain } from '~/features/DefaultView/elements';
import { NavLink } from 'react-router-dom';

export const AccountMain = styled(DefaultMain)`
  background-color: ${({ theme }) => theme.gray1};
`;

export const AccountContentWrapper = styled.div`
  min-width: 320px;
  max-width: calc(960px - 20px);
  margin: 0 auto;
  width: 100%; ;
`;

export const LeftSide = styled.section`
  width: calc(100% / 3);
  padding: 0 10px;
`;

export const LeftSideHeader = styled.div`
  background-color: ${({ theme }) => theme.white};
  margin-bottom: 5px;
`;

export const HeaderContent = styled.div`
  padding: 40px 25px;
  text-align: left;
`;

export const Header = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
`;

export const LeftSideNav = styled.nav`
  background-color: ${({ theme }) => theme.white};
`;

export const NavList = styled.ul``;

export const ListItem = styled.li`
  position: relative;

  &:not(&:first-child)::after {
    content: '';
    border-top: 1px solid ${({ theme }) => theme.gray2};
    position: absolute;
    top: 0;
    right: 0;
    left: 68px;
  }
`;

export const ItemLink = styled(NavLink)`
  display: block;
  padding: 18px 20px 18px 68px;
  text-decoration: none;

  &.active {
    position: relative;
    background-color: ${({ theme }) => theme.gray3};

    &::before {
      content: '';
      border-right: 4px solid ${({ theme }) => theme.blue7};
      bottom: 0;
      left: -2px;
      position: absolute;
      top: 0;
    }

    span {
      font-weight: 700;
    }
  }
`;

export const LinkIconWrapper = styled.div`
  position: absolute;
  left: 0;
  line-height: 0;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
  width: 68px;
`;

export const IconWrap = styled.div`
  display: inline-block;
  position: relative;
  font-size: 0;
`;

export const Icon = styled.img`
  width: auto;
  height: auto;
`;

export const LinkTextWrapper = styled.div``;

export const Text = styled.span`
  letter-spacing: 0.05rem;
`;

export const Content = styled(LeftSide)`
  width: calc((100% / 3) * 2);
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const ContentHeaderWrapper = styled.div``;
