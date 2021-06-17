import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $companyClients } from '../store';
import { getCompanyClients } from '../store/events';
import TabItem from './TabItem';
import { COMPANY_COLUMNS } from '../constants';

const Companies = () => {
  const clients = useStore($companyClients);

  useEffect(() => {
    if (!clients.length) {
      getCompanyClients({ clientCategoryId: 2 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabItem
      searchFieldLabel="Поиск по названию"
      tableColumns={COMPANY_COLUMNS}
      data={clients}
    />
  );
};

export default Companies;
