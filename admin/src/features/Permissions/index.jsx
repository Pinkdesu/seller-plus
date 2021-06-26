import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { COLUMNS } from './constants';
import { useStore } from 'effector-react';
import { $permissions } from './store';
import { getPermissions, resetPermissions } from './store/events';
import Container from '@material-ui/core/Container';
import DataTable from '~/features/Common/DataTable';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';
import Header from '~/features/Common/Header';
import AddButton from '~/features/Common/AddButton';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Permissions = () => {
  const classes = useStyles();
  const history = useHistory();

  const permissions = useStore($permissions);

  useEffect(() => {
    getPermissions();

    return () => resetPermissions();
  }, []);

  const handleClick = () => {
    history.push('/permission');
  };

  return (
    <div className={classes.root}>
      <Header title="Разрешения" />
      <Container className={classes.formWrapper}>
        <div>
          <div>
            <Typography variant="h6">Фильтры</Typography>
          </div>
          <div className={classes.filtersWrapper}>
            <SearchField label="Поиск по номеру" className={classes.filter} />
            <SearchSelect label="Ответственный" className={classes.filter} />
            <TextField
              type="date"
              label="Дата получения"
              variant="outlined"
              defaultValue="2021-06-01"
              className={classes.filter}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <DataTable columns={COLUMNS} data={permissions} />
        </div>
        <div className={classes.formBottomSide}>
          <AddButton text="Создать новое разрешение" onClick={handleClick} />
        </div>
      </Container>
    </div>
  );
};

export default Permissions;
