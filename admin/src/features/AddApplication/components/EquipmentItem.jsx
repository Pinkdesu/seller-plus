import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const EquipmentItem = () => {
  const classes = useStyles();

  return (
    <ListItem className={classes.infoItem}>
      <SearchSelect
        className={classes.infoTextField}
        label="Оборудование"
        options={['Водонагреватель NI-t122']}
      />
      <TextField
        type="number"
        label="Количество"
        className={classes.infoTextField}
        variant="outlined"
        defaultValue={1}
        required
      />
    </ListItem>
  );
};

export default EquipmentItem;
