import React, { useEffect, useState, useCallback } from 'react';
import useScrollLoader from '~/utils/useScrollLoader';
import { useStore } from 'effector-react';
import { $applications, $statuses, $hasMore, $pageNumber } from './store';
import { $employees } from '~/features/AppBootstrap/store';
import {
  getApplications,
  getSearchApplications,
  getStatuses,
  resetApplications,
} from './store/events';
import {
  getOptionLabel,
  getOptionSelected,
} from '~/features/AddProduct/constants';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { COLUMNS } from './constants';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import DataTable from '~/features/Common/DataTable';
import Typography from '@material-ui/core/Typography';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';
import Header from '~/features/Common/Header';
import AddButton from '~/features/Common/AddButton';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Applications = () => {
  const classes = useStyles();
  const history = useHistory();

  const statuses = useStore($statuses);
  const employees = useStore($employees);
  const applications = useStore($applications);

  const hasMore = useStore($hasMore);
  const pageNumber = useStore($pageNumber);

  const [searchValue, setSearchValue] = useState('');
  const [filters] = useState({
    employeeId: null,
    clientId: null,
    applicationStatusId: null,
  });

  useEffect(() => {
    getApplications();

    if (!statuses.length) {
      getStatuses();
    }

    return () => resetApplications();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = () => {
    history.push('/application');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  const onSearch = useCallback(() => {
    getSearchApplications({ searchValue, ...filters });
  }, [searchValue, filters]);

  const getMoreApplications = useCallback(() => {
    getApplications({
      page: pageNumber,
      searchValue,
      ...filters,
    });
  }, [pageNumber, searchValue, filters]);

  const loadScroll = useScrollLoader(getMoreApplications, {
    hasMore,
  });

  return (
    <div className={classes.root}>
      <Header title="Заявки" />
      <Container className={classes.formWrapper}>
        <div>
          <div>
            <Typography variant="h6">Фильтры</Typography>
          </div>
          <div className={classes.filtersWrapper}>
            <SearchField
              label="Поиск по номеру, теме"
              value={searchValue}
              onChange={handleSearchChange}
              className={classes.filter}
              onClick={onSearch}
            />
            <SearchSelect
              label="Ответственный"
              options={employees}
              getOptionLabel={getOptionLabel}
              getOptionSelected={getOptionSelected}
              className={classes.filter}
            />
            <SearchSelect
              label="Статус"
              options={statuses}
              getOptionLabel={getOptionLabel}
              getOptionSelected={getOptionSelected}
              className={classes.filter}
            />
            <SearchSelect label="Клиент" className={classes.filter} />
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <DataTable
            columns={COLUMNS}
            data={applications}
            onScroll={loadScroll}
          />
        </div>
        <div className={classes.formBottomSide}>
          <AddButton text="Создать новую заявку" onClick={handleClick} />
        </div>
      </Container>
    </div>
  );
};

export default Applications;
