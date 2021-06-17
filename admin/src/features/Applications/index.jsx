import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $applications } from './store';
import { getApplications, resetApplications } from './store/events';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { COLUMNS } from './constants';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import DataTable from '~/features/Common/DataTable';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Applications = () => {
  const classes = useStyles();
  const history = useHistory();

  const applications = useStore($applications);

  useEffect(() => {
    getApplications();

    return () => resetApplications();
  }, []);

  const handleClick = () => {
    history.push('/application');
  };

  return (
    <div className={classes.root}>
      <Container className={classes.pageHeaderWrapper}>
        <Typography variant="h1" className={classes.pageHeader}>
          Заявки
        </Typography>
      </Container>
      <Container className={classes.formWrapper}>
        <div>
          <div>
            <Typography variant="h6">Фильтры</Typography>
          </div>
          <div className={classes.filtersWrapper}>
            <SearchField
              label="Поиск по номеру, теме"
              className={classes.filter}
            />
            <SearchSelect label="Ответственный" className={classes.filter} />
            <SearchSelect label="Статус" className={classes.filter} />
            <SearchSelect label="Клиент" className={classes.filter} />
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <DataTable columns={COLUMNS} data={applications} />
        </div>
        <div className={classes.formBottomSide}>
          <Button
            variant="contained"
            component="label"
            color="primary"
            onClick={handleClick}
            startIcon={<PostAddIcon />}
          >
            Создать новую заявку
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Applications;
