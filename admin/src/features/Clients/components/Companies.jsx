import React from 'react';
import TabItem from './TabItem';
import { COLUMNS } from '../constants';

const Companies = () => {
  return (
    <TabItem
      searchFieldLabel="Поиск по названию"
      tableColumns={COLUMNS}
      data={[]}
    />
  );
};

export default Companies;
