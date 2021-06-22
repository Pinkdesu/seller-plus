import React, { useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import useScrollLoader from '~/utils/useScrollLoader';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchField from '~/features/Common/SearchField';
import DataTable from '~/features/Common/DataTable';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Companies = (props) => {
  const classes = useStyles();

  const {
    data,
    getClients,
    searchClients,
    tableColumns,
    searchFieldLabel,
    hasMore,
    pageNumber,
  } = props;

  const [searchName, setSearchName] = useState('');

  const handleSearchChange = (e) => {
    const value = e.target.value;

    setSearchName(value);
  };

  const onSearch = () => {
    searchClients(searchName);
  };

  const getMoreProducts = useCallback(() => {
    getClients({ page: pageNumber, searchName });
  }, [pageNumber, getClients, searchName]);

  const loadScroll = useScrollLoader(getMoreProducts, {
    hasMore,
    perOffset: 20,
  });

  return (
    <div role="tabpanel">
      <Container>
        <div>
          <Typography variant="h6">Фильтры</Typography>
        </div>
        <div className={classes.filtersWrapper}>
          <SearchField
            label={searchFieldLabel}
            className={classes.filter}
            value={searchName}
            onChange={handleSearchChange}
            onClick={onSearch}
          />
        </div>
        <div className={classes.tableWrapper}>
          <DataTable columns={tableColumns} data={data} onScroll={loadScroll} />
        </div>
      </Container>
    </div>
  );
};

export default Companies;
