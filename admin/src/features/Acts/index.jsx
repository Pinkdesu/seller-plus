import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import DataTable from '~/features/Common/DataTable';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PostAddIcon from '@material-ui/icons/PostAdd';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Acts = () => {
  const classes = useStyles();
  const history = useHistory();

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
              label="Дата"
              variant="outlined"
              defaultValue="2021-06-01"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <DataTable columns={[]} pagesCount={2} data={[]} />
        </div>
        <div className={classes.formBottomSide}>
          <Button
            variant="contained"
            component="label"
            color="primary"
            onClick={handleClick}
            startIcon={<PostAddIcon />}
          >
            Создать новый акт
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Acts;
