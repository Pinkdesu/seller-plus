import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DataSelect from '~/features/Common/DataSelect';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddProject = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.pageHeaderWrapper}>
        <Typography variant="h1" className={classes.pageHeader}>
          Добавить проект
        </Typography>
      </Container>
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <DataSelect
                defaultValue="-"
                label="Разрешение"
                data={[[1, '1']]}
                value={1}
              />
              <TextField
                fullWidth
                variant="outlined"
                required
                label="Номер проекта"
              />
            </div>
            <div className={classes.fieldsWrapper}>
              <DataSelect
                defaultValue="-"
                label="Акт"
                data={[[1, '1']]}
                value={1}
              />
              <TextField
                type="date"
                label="Дата"
                variant="outlined"
                defaultValue="2021-06-01"
                required
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
            <Button
              variant="contained"
              component="label"
              startIcon={<AttachFileIcon />}
            >
              Загрузить файлы
              <input type="file" hidden />
            </Button>
            <Button
              variant="contained"
              component="label"
              color="primary"
              startIcon={<PostAddIcon />}
            >
              Создать проект
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddProject;
