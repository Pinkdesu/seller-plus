import styled from 'styled-components';
import { Main } from '~/features/Shop/elements';
import { SearchBarWrapper } from '~/features/SearchBar/elements';
import { FiltersList } from '~/features/Filters/elements';
import { LoaderSpinner } from '~/features/Common/elements';

export const Content = styled.section`
  display: flex;
  position: relative;
  flex-flow: row wrap;
  gap: 20px;
  min-height: 400px;

  & ${LoaderSpinner} svg > path {
    fill: ${({ theme }) => theme.black2};
  }
`;

export const ShopCategory = styled(Main)`
  padding: 0;

  & ${FiltersList}, ${Content}, ${SearchBarWrapper} {
    max-width: 1318px;
    padding: 32px 24px;
    margin: 0 auto;
  }

  & ${SearchBarWrapper} {
    padding: 0 24px;
  }
`;
