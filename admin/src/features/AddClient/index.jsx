import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { TABS } from '~/features/Clients/constants';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CompanyForm from './components/CompanyForm';
import IndividualForm from './components/IndividualForm';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddClient = () => {
  const classes = useStyles();

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (_, value) => {
    setActiveTab(value);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.pageHeaderWrapper}>
        <Typography variant="h1" className={classes.pageHeader}>
          Добавить клиента
        </Typography>
      </Container>
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
          {activeTab === 1 && <IndividualForm />}
          {activeTab === 2 && <CompanyForm />}
        </Container>
      </Container>
    </div>
  );
};

export default AddClient;
