import React, { memo, useState } from 'react';
import { useStore } from 'effector-react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { $searchProducts } from '../store';
import SearchSelect from '~/features/Common/SearchSelect';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import {
  getOptionLabel,
  getOptionSelected,
} from '~/features/AddProduct/constants';
import { changeProductValue } from '../store/events';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Product = (props) => {
  const classes = useStyles();

  const { supplierPrice, count, index } = props;

  const products = useStore($searchProducts);
  const [searchProduct, onSearch] = useState('');

  const handleSearchChange = () => {};

  const onChange = (stateName) => (e) => {
    const value = e.target.value;

    changeProductValue({ stateName, index, value });
  };

  return (
    <ListItem className={classes.infoItem}>
      <SearchSelect
        options={products}
        onChange={() => {}}
        getOptionLabel={() => {}}
        className={classes.infoTextField}
      />
      <TextField
        required
        type="number"
        value={supplierPrice}
        onChange={onChange('supplierPrice')}
        variant="outlined"
        label="Цена закупки"
        className={classes.infoTextField}
      />
      <TextField
        required
        type="number"
        value={count}
        onChange={onChange('count')}
        variant="outlined"
        label="Количество"
      />
    </ListItem>
  );
};

export default memo(Product);
