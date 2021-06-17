import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import AddButton from '~/features/Common/AddButton';
import FileButton from '~/features/Common/FileButton';
import Header from '~/features/Common/Header';
import EquipmentItem from './components/EquipmentItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddProject = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header title={`Добавить проект №${1}`} />
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <SearchSelect defaultValue="-" label="Разрешение" />
              <SearchSelect defaultValue="-" label="Акт" />
            </div>
            <div className={classes.fieldsWrapper}>
              <SearchSelect defaultValue="-" label="Ответственный" />
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
          <div className={classes.infoWrapper}>
            <List className={classes.infoList}>
              {[1].map((index) => (
                <EquipmentItem key={index} />
              ))}
              <ListItem className={classes.infoItem}>
                <Button variant="contained" color="primary">
                  Добавить
                </Button>
                <Button variant="contained">Удалить</Button>
              </ListItem>
            </List>
          </div>
          <div className={classes.formBottomSide}>
            <FileButton />
            <AddButton text="Создать проект" />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddProject;
