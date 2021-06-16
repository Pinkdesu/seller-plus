import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { TABS } from './constants';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Individuals from './components/Individuals';
import Companies from './components/Companies';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Clients = () => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (_, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.pageHeaderWrapper}>
        <Typography variant="h1" className={classes.pageHeader}>
          Клиеты
        </Typography>
      </Container>
      <Container className={classes.defaultWrapper}>
        <AppBar position="static" color="white">
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
      </Container>
    </div>
  );
};

export default Clients;
