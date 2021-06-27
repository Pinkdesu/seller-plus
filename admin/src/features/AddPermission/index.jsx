import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DataSelect from '~/features/Common/DataSelect';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Header from '~/features/Common/Header';
import FileButton from '~/features/Common/FileButton';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddPermission = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title="Добавить разрешение" />
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <DataSelect label="Заявка" data={[[1, '131']]} value={1} />
              <DataSelect
                multiple
                disabled
                label="Ответственние(ый)"
                data={[[1, 'Аксенова Вероника Максимовна']]}
                value={[1, 2]}
              />
              <DataSelect
                disabled
                label="Клиент"
                data={[[1, 'Цветков Захар Артёмович']]}
                value={1}
              />
            </div>
            <div className={classes.fieldsWrapper}>
              <TextField
                label="Номер разрешения"
                variant="outlined"
                value="23"
              />
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
            <Button
              variant="contained"
              component="label"
              color="primary"
              startIcon={<PostAddIcon />}
            >
              Создать разрешение
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddPermission;
