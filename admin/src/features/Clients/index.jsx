import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { TABS } from './constants';
import { resetCompanyClients, resetIndividualClients } from './store/events';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Individuals from './components/Individuals';
import Companies from './components/Companies';
import Header from '~/features/Common/Header';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Clients = () => {
  const classes = useStyles();
  const history = useHistory();

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    return () => {
      resetCompanyClients();
      resetIndividualClients();
    };
  }, []);

  const changeTab = (_, newValue) => {
    setActiveTab(newValue);
  };

  const onCreate = () => {
    history.push('/client');
  };

  return (
    <div className={classes.root}>
      <Header title="Клиенты" />
      <Container className={classes.defaultWrapper}>
        <AppBar position="static" color="inherit">
          <Tabs
            value={activeTab}
            onChange={changeTab}
            indicatorColor="primary"
            variant="fullWidth"
          >
            {TABS.map((tab) => (
              <Tab key={tab.id} label={tab.label} value={tab.id} id={tab.id} />
            ))}
          </Tabs>
        </AppBar>
        <Container className={classes.formWrapper}>
          {activeTab === 1 && <Individuals />}
          {activeTab === 2 && <Companies />}
        </Container>
        <div className={classes.formWrapper}>
          <Button onClick={onCreate} variant="contained" color="primary">
            Добавить клиента
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Clients;
