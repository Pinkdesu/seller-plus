import styled from 'styled-components';
import { DefaultMain } from '~/features/DefaultView/elements';
import { NavLink } from 'react-router-dom';
import { FieldWrapper, Button } from '~/features/Common/elements';

export const AccountMain = styled(DefaultMain)`
  background-color: ${({ theme }) => theme.gray1};
`;

export const AccountContentWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  min-width: 320px;
  max-width: calc(960px - 20px);
  margin: 0 auto;
  width: 100%; ;
`;

export const LeftSide = styled.section`
  flex: 1 0 calc(100% / 3);
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
  flex: 2 0 calc(100% * 2 / 3);
`;

export const ContentLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
  flex-shrink: 1;
`;

export const ContentHeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.white};
`;

export const ContentHeader = styled.div`
  padding: 32px 32px 0;
  text-align: left;
`;

export const ImageThumb = styled.div`
  font-size: 0;
  margin-bottom: calc(3 * 4px);
`;

export const PageImage = styled.img`
  width: 30px;
  height: 30px;
`;

export const PageHeader = styled(Header)`
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: 0.15rem;
  text-transform: uppercase;
  margin-bottom: calc(2 * 4px);
`;

export const PageText = styled.p`
  display: block;
  line-height: 1.5rem;
  max-width: 550px;
  text-align: left;
  letter-spacing: 0.05rem;
`;

export const PageContainer = styled.div`
  position: relative;
  min-height: 500px;
`;

export const PersonalData = styled.div`
  background-color: ${({ theme }) => theme.white};

  & ${FieldWrapper}, ${Button} {
    max-width: 340px;
  }
`;

export const PersonalDataEdit = styled(ContentHeader)`
  display: flex;
  flex-flow: column nowrap;
  gap: 25px;
`;

export const SubmitButtonWrapper = styled(ContentHeader)`
  padding-top: 40px;
  padding-bottom: 32px;
`;
