import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import Header from '~/features/Common/Header';
import FileButton from '~/features/Common/FileButton';
import AddButton from '~/features/Common/AddButton';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddContracts = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title="Добавить договор" />
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <TextField label="Название" variant="outlined" />
              <SearchSelect label="Проект" />
            </div>
            <div className={classes.fieldsWrapper}>
              <SearchSelect label="Ответственный" />
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
          <div className={classes.textAreaWrapper}>
            <TextField
              label="Содержание"
              multiline
              rows={10}
              placeholder="Опишите..."
              fullWidth
              value="Разрешение на запуск газа подписано"
              variant="outlined"
            />
          </div>
          <div className={classes.formBottomSide}>
            <FileButton onChange={() => {}} />
            <AddButton text="Создать договор" />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddContracts;
