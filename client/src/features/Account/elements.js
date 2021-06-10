import styled from 'styled-components';
import { DefaultMain } from '~/features/DefaultView/elements';
import { NavLink, Link } from 'react-router-dom';
import { FieldWrapper, Button, ImageWrapper } from '~/features/Common/elements';

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

  & ${ImageWrapper} {
    display: inline-block;
    width: 24px;
    height: 24px;
  }
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
  padding: 32px;
  text-align: left;

  & ${ImageWrapper} {
    margin-bottom: calc(3 * 4px);
    width: 30px;
    height: 30px;
  }
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
  margin-bottom: 0;
`;

export const PageContainer = styled.section`
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

export const OrdersCount = styled.p`
  padding: 20px 32px;
  margin: 0;
`;

export const OrdersWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const OrderWrapper = styled.article`
  padding: 20px 24px;
  background-color: ${({ theme }) => theme.white};
`;

export const OrderStatus = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
  padding: 0 8px;
`;

export const OrderMain = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 20px;
  padding: 20px 8px;
`;

export const OrderProducts = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  flex: 1 1 55%;
  max-width: 55%;
`;

export const ProductItem = styled.div`
  position: relative;
  width: 100%;

  & ${ImageWrapper} {
    padding-top: 100%;
  }
`;

export const OtherCountWrapper = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(33, 33, 33, 0.5);
  left: 0;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 1;
`;

export const OtherCount = styled.span`
  position: absolute;
  color: ${({ theme }) => theme.white};
  letter-spacing: 0.3rem;
  line-height: 125px;
  font-size: 2.6rem;
  font-weight: 700;
  right: 0;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const OrderProductLink = styled(Link)`
  text-decoration: none;
`;

export const OrderLinkWrapper = styled.div`
  flex: 1 1 45%;
`;

export const OrderLink = styled(Link)`
  display: inline-block;
  width: 100%;
  text-align: center;
  padding: 25px 12px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.gray2};

  &:hover {
    background-color: ${({ theme }) => theme.gray1};
  }
`;

export const OrderFooter = styled.div`
  margin-top: 20px;
  padding: 0 8px;
`;

export const TextItem = styled.p`
  margin: 0;
  margin-bottom: 8px;
`;

export const ItemTitle = styled.span`
  font-weight: 700;
`;

export const ItemValue = styled.span`
  margin-left: 6px;
`;

export const OrderPage = styled(OrdersWrapper)`
  margin-top: 14px;
`;

export const OrderInfoWrapper = styled(OrderWrapper)`
  padding: 20px 32px;
`;
