import React, { useState, useEffect } from 'react';
import { useStore } from 'effector-react';
import { $districts } from './store';
import { getDistricts } from './store/events';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { TABS } from '~/features/Clients/constants';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CompanyForm from './components/CompanyForm';
import IndividualForm from './components/IndividualForm';
import Header from '~/features/Common/Header';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddClient = () => {
  const classes = useStyles();

  const districts = useStore($districts);

  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (_, value) => {
    setActiveTab(value);
  };

  useEffect(() => {
    if (!districts.length) {
      getDistricts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <Header title="Добавить клиента" />
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
          {activeTab === 1 && <IndividualForm districts={districts} />}
          {activeTab === 2 && <CompanyForm districts={districts} />}
        </Container>
      </Container>
    </div>
  );
};

export default AddClient;
