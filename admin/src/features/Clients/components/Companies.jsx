import React, { useEffect, useCallback } from 'react';
import { useStore } from 'effector-react';
import { $companyClients, $companyHasMore, $companyPageNumber } from '../store';
import { getCompanyClients, searchCompanyClients } from '../store/events';
import TabItem from './TabItem';
import { COMPANY_COLUMNS } from '../constants';

const Companies = () => {
  const clients = useStore($companyClients);
  const companyHasMore = useStore($companyHasMore);
  const companyPageNumber = useStore($companyPageNumber);

  const getClients = useCallback((payload = {}) => {
    getCompanyClients({ clientCategoryId: 2, ...payload });
  }, []);

  const searchClients = useCallback((searchName) => {
    searchCompanyClients({ clientCategoryId: 2, searchName });
  }, []);

  useEffect(() => {
    if (!clients.length) {
      getClients();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabItem
      hasMore={companyHasMore}
      pageNumber={companyPageNumber}
      getClients={getClients}
      searchClients={searchClients}
      searchFieldLabel="Поиск по названию"
      tableColumns={COMPANY_COLUMNS}
      data={clients}
    />
  );
};

export default Companies;
