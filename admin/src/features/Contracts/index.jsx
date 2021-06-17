import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { COLUMNS, ROWS } from './constants';
import Container from '@material-ui/core/Container';
import DataTable from '~/features/Common/DataTable';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';
import AddButton from '~/features/Common/AddButton';
import Header from '~/features/Common/Header';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Contracts = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push('/contract');
  };

  return (
    <div className={classes.root}>
      <Header title="Договоры" />
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
              label="Дата"
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
          <DataTable columns={COLUMNS} data={ROWS} />
        </div>
        <div className={classes.formBottomSide}>
          <AddButton onClick={handleClick} text="Создать новый договор" />
        </div>
      </Container>
    </div>
  );
};

export default Contracts;
