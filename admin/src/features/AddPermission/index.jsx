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
      <Header title={`Добавить разрешение №${1}`} />
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <DataSelect
                defaultValue="-"
                label="Акт"
                data={[[1, '1']]}
                value={1}
              />
              <DataSelect
                defaultValue="-"
                label="Ответственный"
                data={[[1, 'Иваное']]}
                value={1}
              />
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
