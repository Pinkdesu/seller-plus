import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { getOptionUnit } from '../constants';
import SearchSelect from '~/features/Common/SearchSelect';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const InfoItem = (props) => {
  const classes = useStyles();

  const { title, onTitle, description, onDescription, onUnit, units, index } =
    props;

  return (
    <ListItem className={classes.infoItem}>
      <TextField
        required
        value={title}
        onChange={onTitle('title', index)}
        variant="outlined"
        label="Название характеристики"
        className={classes.infoTextField}
      />
      <TextField
        required
        value={description}
        onChange={onDescription('description', index)}
        variant="outlined"
        label="Значение"
        className={classes.infoTextField}
      />
      <SearchSelect
        options={units}
        onChange={onUnit(index)}
        getOptionLabel={getOptionUnit}
      />
    </ListItem>
  );
};

export default memo(InfoItem);
