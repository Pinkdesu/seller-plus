import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { STYLES } from '../constants';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';
import DataTable from '~/features/Common/DataTable';

const useStyles = makeStyles(STYLES);

const Companies = (props) => {
  const classes = useStyles();

  const { searchFieldLabel } = props;

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
          <DataTable columns={[]} pagesCount={2} data={[]} />
        </div>
      </Container>
    </div>
  );
};

export default Companies;
