import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Header from '~/features/Common/Header';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Dashboard = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToEmployeeReport = () => {
    history.push('/report/employee');
  };

  const goToClientReport = () => {
    history.push('/report/client');
  };

  const goToProductReport = () => {
    history.push('/report/product');
  };

  const goToDistrictReport = () => {
    history.push('/report/district');
  };

  const goToAppCountReport = () => {
    history.push('/report/app-count');
  };

  const goToOrderReport = () => {
    history.push('/report/order');
  };

  const goToUserReport = () => {
    history.push('/report/user');
  };

  const goToAverageCheckReport = () => {
    history.push('/report/average-check');
  };

  return (
    <div className={classes.root}>
      <Header title="Главная" />
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <Button
                variant="contained"
                color="primary"
                onClick={goToEmployeeReport}
              >
                Отчёт по ответственным
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={goToClientReport}
              >
                Отчёт по клиентам
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={goToProductReport}
              >
                Отчёт по продуктам
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={goToDistrictReport}
              >
                Отчёт по районам
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={goToAppCountReport}
              >
                Отчёт по кол-ву заявок у клиентов
              </Button>
            </div>
            <div className={classes.fieldsWrapper}>
              <Button
                variant="contained"
                color="primary"
                onClick={goToOrderReport}
              >
                Отчёт по заказам
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={goToUserReport}
              >
                Отчёт по кол-ву заказов у пользователя
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={goToAverageCheckReport}
              >
                Средний чек
              </Button>
            </div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Dashboard;
