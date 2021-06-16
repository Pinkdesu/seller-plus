import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const CompanyForm = () => {
  const classes = useStyles();

  return (
    <form>
      <div className={classes.formFieldsSide}>
        <div className={classes.fieldsWrapper}>
          <TextField required variant="outlined" label="Полное наименование" />
          <TextField required variant="outlined" label="Юридический адрес" />
          <TextField required variant="outlined" label="ИНН" />
          <SearchSelect label="Район" />
        </div>
        <div className={classes.fieldsWrapper}>
          <TextField required variant="outlined" label="ОГРН" />
          <TextField required variant="outlined" label="Номер телефона" />
          <TextField required variant="outlined" label="ФИО ответственного" />
        </div>
      </div>
      <div className={classes.formBottomSide}>
        <Button
          variant="contained"
          component="label"
          color="primary"
          startIcon={<PostAddIcon />}
        >
          Добавить клиента
        </Button>
      </div>
    </form>
  );
};

export default CompanyForm;
