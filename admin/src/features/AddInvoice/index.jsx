import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DataSelect from '~/features/Common/DataSelect';
import Header from '~/features/Common/Header';
import AddButton from '~/features/Common/AddButton';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddInvoice = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title="Добавить товарную накладную" />
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <DataSelect
                defaultValue="-"
                label="Ответственный"
                data={[[1, 'Иван Иванов']]}
                value={1}
              />
              <TextField label="Номер накладной" variant="outlined" />
            </div>
            <div className={classes.fieldsWrapper}>
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
          <div className={classes.formBottomSide}>
            <AddButton text="Добавить накладную" />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddInvoice;
