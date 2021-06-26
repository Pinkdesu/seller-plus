import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { INVOICE_COLUMNS } from '../constants';
import {
  getInvoiceReport,
  resetReport,
  getInvoicePeriod,
} from '../store/events';
import { $report, $period } from '../store';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DataTable from '~/features/Common/DataTable';
import Header from '~/features/Common/Header';
import DatePicker from '~/features/Common/DatePicker';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const SupplyReport = () => {
  const classes = useStyles();

  const report = useStore($report);
  const period = useStore($period);
  const pending = useStore(getInvoiceReport.pending);

  const [periodTo, setPeriodTo] = useState('');
  const [periodFrom, setPeriodFrom] = useState('');

  useEffect(() => {
    if (!period.to || !periodFrom) {
      getInvoicePeriod();
    }
    return () => resetReport();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPeriodTo(period.to);
    setPeriodFrom(period.from);
  }, [period]);

  const handleClick = () => {
    getInvoiceReport({ periodFrom, periodTo });
  };

  const handleFromChange = (e) => {
    const value = e.target.value;

    setPeriodFrom(value);
  };

  const handleToChange = (e) => {
    const value = e.target.value;

    setPeriodTo(value);
  };

  return (
    <div className={classes.root}>
      <Header title="Отчёт по поставкам на склад" />
      <Container className={classes.formWrapper}>
        <div>
          <div>
            <Typography variant="h6">Период</Typography>
          </div>
          <div className={classes.filtersWrapper}>
            <DatePicker
              label="Период с"
              value={periodFrom}
              min={periodFrom}
              max={periodTo}
              onChange={handleFromChange}
            />
            <DatePicker
              label="Период по"
              min={periodFrom}
              max={periodTo}
              value={periodTo}
              onChange={handleToChange}
            />
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
            <DataTable columns={INVOICE_COLUMNS} data={report} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default SupplyReport;
