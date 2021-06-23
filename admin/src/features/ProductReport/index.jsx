import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { COLUMNS } from './constants';
import { getProductReport, resetReport } from './store/events';
import { $report } from './store';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DataTable from '~/features/Common/DataTable';
import Header from '~/features/Common/Header';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const ProductReport = () => {
  const classes = useStyles();

  const report = useStore($report);
  const pending = useStore(getProductReport.pending);

  useEffect(() => {
    return () => resetReport();
  }, []);

  const handleClick = () => {
    getProductReport();
  };

  return (
    <div className={classes.root}>
      <Header title="Отчёт по продуктам" />
      <Container className={classes.formWrapper}>
        <div>
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
          {Boolean(report.length) && (
            <DataTable columns={COLUMNS} data={report} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default ProductReport;
