import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const IndividualForm = () => {
  const classes = useStyles();

  return (
    <form>
      <div className={classes.formFieldsSide}>
        <div className={classes.fieldsWrapper}>
          <TextField required variant="outlined" label="ФИО" />
          <TextField required variant="outlined" label="Email" />
          <TextField required variant="outlined" label="Телефон" />
          <TextField required variant="outlined" label="Адрес" />
          <SearchSelect label="Район" />
        </div>
        <div className={classes.fieldsWrapper}>
          <TextField
            required
            variant="outlined"
            type="number"
            label="Серия паспорта"
          />
          <TextField
            required
            variant="outlined"
            type="number"
            label="Номер паспорта"
          />
          <TextField required variant="outlined" label="Кем выдан" />
          <TextField
            required
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            label="Когда выдан"
          />
          <TextField required variant="outlined" label="ИНН" />
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

export default IndividualForm;
