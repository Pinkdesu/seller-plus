import React, { useEffect, useCallback } from 'react';
import { useStore } from 'effector-react';
import {
  $individualClients,
  $individualHasMore,
  $individualPageNumber,
} from '../store';
import { getIndividualClients, searchIndividualClients } from '../store/events';
import TabItem from './TabItem';
import { INDIVIDUAL_COLUMNS } from '../constants';

const Individuals = () => {
  const clients = useStore($individualClients);
  const individualHasMore = useStore($individualHasMore);
  const individualPageNumber = useStore($individualPageNumber);

  const getClients = useCallback((payload = {}) => {
    getIndividualClients({ clientCategoryId: 1, ...payload });
  }, []);

  const searchClients = useCallback((searchName) => {
    searchIndividualClients({ clientCategoryId: 1, searchName });
  }, []);

  useEffect(() => {
    if (!clients.length) {
      getClients();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabItem
      hasMore={individualHasMore}
      pageNumber={individualPageNumber}
      getClients={getClients}
      searchClients={searchClients}
      searchFieldLabel="Поиск по ФИО"
      tableColumns={INDIVIDUAL_COLUMNS}
      data={clients}
    />
  );
};

export default Individuals;
