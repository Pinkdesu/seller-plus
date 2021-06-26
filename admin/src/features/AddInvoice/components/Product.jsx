import React, { memo, useMemo } from 'react';
import { useStore } from 'effector-react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { $searchProducts } from '../store';
import { getSearchProducts } from '../store/events';
import SearchSelect from '~/features/Common/SearchSelect';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import {
  getOptionLabel,
  getOptionSelected,
} from '~/features/AddProduct/constants';
import debounce from 'lodash.debounce';
import { changeProductValue } from '../store/events';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Product = (props) => {
  const classes = useStyles();

  const { supplierPrice, count, index } = props;

  const products = useStore($searchProducts);
  const pending = useStore(getSearchProducts.pending);

  const debounceSearch = useMemo(
    () => debounce((_, text) => getSearchProducts({ text }), 300),
    [],
  );

  const onChange = (stateName) => (e) => {
    const value = e.target.value;

    changeProductValue({ stateName, index, value });
  };

  const onProduct = (_, value) => {
    const id = value?.id;

    changeProductValue({ stateName: 'productId', index, value: id });
  };

  return (
    <ListItem className={classes.infoItem}>
      <SearchSelect
        options={products}
        onChange={onProduct}
        onInputChange={debounceSearch}
        getOptionLabel={getOptionLabel}
        getOptionSelected={getOptionSelected}
        className={classes.infoTextField}
        loading={pending}
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
