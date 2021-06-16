import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $clients } from '../store';
import { getClients } from '../store/events';
import TabItem from './TabItem';
import { COLUMNS } from '../constants';

const Individuals = () => {
  const clients = useStore($clients);

  useEffect(() => {
    if (!clients.length) {
      getClients();
    }
  }, [clients]);

  return (
    <TabItem
      searchFieldLabel="Поиск по ФИО"
      tableColumns={COLUMNS}
      data={clients}
    />
  );
};

export default Individuals;
