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
            </div>
            <div className={classes.fieldsWrapper}></div>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Dashboard;
