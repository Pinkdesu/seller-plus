import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DataSelect from '~/features/Common/DataSelect';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddApplication = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.pageHeaderWrapper}>
        <Typography variant="h1" className={classes.pageHeader}>
          Добавить заявку №1
        </Typography>
      </Container>
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <DataSelect
                defaultValue="-"
                label="Клиент"
                data={[[1, 'Иван Иванов']]}
                value={1}
              />
              <DataSelect
                defaultValue="-"
                label="Тема обращения"
                data={[[1, 'Газификация дома']]}
                value={1}
              />
            </div>
            <div className={classes.fieldsWrapper}>
              <DataSelect
                defaultValue="-"
                label="Ответственный"
                data={[[1, 'Иваныч']]}
                value={1}
              />
              <TextField
                type="date"
                label="Дата подачи"
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
              defaultValue=""
              value=""
              variant="outlined"
            />
          </div>
          <div className={classes.formBottomSide}>
            <Button
              variant="contained"
              component="label"
              startIcon={<AttachFileIcon />}
            >
              Загрузить файл
              <input type="file" hidden />
            </Button>
            <Button
              variant="contained"
              component="label"
              color="primary"
              startIcon={<PostAddIcon />}
            >
              Создать заявку
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddApplication;
