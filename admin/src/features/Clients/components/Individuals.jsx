import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $individualClients } from '../store';
import { getIndividualClients } from '../store/events';
import TabItem from './TabItem';
import { INDIVIDUAL_COLUMNS } from '../constants';

const Individuals = () => {
  const clients = useStore($individualClients);

  useEffect(() => {
    if (!clients.length) {
      getIndividualClients({ clientCategoryId: 1 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabItem
      searchFieldLabel="Поиск по ФИО"
      tableColumns={INDIVIDUAL_COLUMNS}
      data={clients}
    />
  );
};

export default Individuals;
