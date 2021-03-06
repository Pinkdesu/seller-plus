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

const AddAct = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.pageHeaderWrapper}>
        <Typography variant="h1" className={classes.pageHeader}>
          Добавить акт
        </Typography>
      </Container>
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
                value={[1]}
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
                label="Номер акта"
                variant="outlined"
                defaultValue="14"
                required
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
              value="Сантиарно-эпидемологическое обследование прошло успешно"
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
              Создать акт
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddAct;
