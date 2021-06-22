import React from 'react';
import { useStore } from 'effector-react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { COLUMNS } from './constants';
import { getEmployeeReport } from './store/events';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DataTable from '~/features/Common/DataTable';
import Header from '~/features/Common/Header';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const EmployeeReport = () => {
  const classes = useStyles();

  const pending = useStore(getEmployeeReport.pending);

  const handleClick = () => {
    getEmployeeReport({});
  };

  return (
    <div className={classes.root}>
      <Header title="Отчёт по ответственным" />
      <Container className={classes.formWrapper}>
        <div>
          <div>
            <Typography variant="h6">Период</Typography>
          </div>
          <div className={classes.filtersWrapper}>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClick}
              disabled={pending}
            >
              Сформировать
            </Button>
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <DataTable columns={COLUMNS} data={[]} />
        </div>
      </Container>
    </div>
  );
};

export default EmployeeReport;
