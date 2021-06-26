import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from 'effector-react';
import { useHistory } from 'react-router';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { COLUMNS } from './constants';
import { $acts } from './store';
import { getActs, resetActs } from './store/events';
import Container from '@material-ui/core/Container';
import DataTable from '~/features/Common/DataTable';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';
import AddButton from '~/features/Common/AddButton';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Acts = () => {
  const classes = useStyles();
  const history = useHistory();

  const acts = useStore($acts);

  useEffect(() => {
    getActs();

    return () => resetActs();
  }, []);

  const handleClick = () => {
    history.push('/act');
  };

  return (
    <div className={classes.root}>
      <Container className={classes.pageHeaderWrapper}>
        <Typography variant="h1" className={classes.pageHeader}>
          Акты
        </Typography>
      </Container>
      <Container className={classes.formWrapper}>
        <div>
          <div>
            <Typography variant="h6">Фильтры</Typography>
          </div>
          <div className={classes.filtersWrapper}>
            <SearchField label="Поиск по номеру" className={classes.filter} />
            <SearchSelect label="Ответственный" className={classes.filter} />
            <SearchSelect label="Заявка" className={classes.filter} />
            <TextField
              type="date"
              label="Дата получения"
              variant="outlined"
              defaultValue="2021-06-01"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <DataTable columns={COLUMNS} data={acts} />
        </div>
        <div className={classes.formBottomSide}>
          <AddButton text="Создать новый акт" onClick={handleClick} />
        </div>
      </Container>
    </div>
  );
};

export default Acts;
