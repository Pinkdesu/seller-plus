import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';
import DataTable from '~/features/Common/DataTable';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Companies = (props) => {
  const classes = useStyles();

  const { searchFieldLabel, tableColumns, data } = props;

  return (
    <div role="tabpanel">
      <Container>
        <div>
          <Typography variant="h6">Фильтры</Typography>
        </div>
        <div className={classes.filtersWrapper}>
          <SearchField label={searchFieldLabel} className={classes.filter} />
          <SearchSelect label="Ответственный" className={classes.filter} />
        </div>
        <div className={classes.tableWrapper}>
          <DataTable columns={tableColumns} pagesCount={2} data={data} />
        </div>
      </Container>
    </div>
  );
};

export default Companies;
