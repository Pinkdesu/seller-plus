import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { useStore } from 'effector-react';
import { $formValues, $products } from './store';
import { $employees } from '~/features/AppBootstrap/store';
import {
  addProduct,
  deleteProduct,
  changeFormValues,
  addInvoice,
} from './store/events';
import {
  getOptionLabel,
  getOptionSelected,
} from '~/features/AddProduct/constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import Header from '~/features/Common/Header';
import AddButton from '~/features/Common/AddButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Product from './components/Product';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddInvoice = () => {
  const classes = useStyles();

  const products = useStore($products);
  const employees = useStore($employees);
  const formValues = useStore($formValues);

  const handleFormValueChange = (stateName) => (e) => {
    const value = e.target.value;
    changeFormValues({ stateName, value });
  };

  const handleEmployeeChange = useCallback((_, value) => {
    const id = value?.id;
    changeFormValues({ stateName: 'employeeId', value: id });
  }, []);

  const handleClick = () => {
    addInvoice({ ...formValues, products });
  };

  return (
    <div className={classes.root}>
      <Header title="Добавить товарную накладную" />
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <SearchSelect
                label="Ответственный"
                options={employees}
                getOptionLabel={getOptionLabel}
                getOptionSelected={getOptionSelected}
                onChange={handleEmployeeChange}
              />
              <TextField
                label="Номер накладной"
                variant="outlined"
                value={formValues.number}
                onChange={handleFormValueChange('number')}
              />
            </div>
            <div className={classes.fieldsWrapper}>
              <TextField
                type="date"
                label="Дата"
                variant="outlined"
                value={formValues.supplierDate}
                onChange={handleFormValueChange('supplierDate')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className={classes.infoWrapper}>
            <List className={classes.infoList}>
              {products.map((product, index) => (
                <Product key={index} index={index} {...product} />
              ))}
              <ListItem className={classes.infoItem}>
                <Button
                  onClick={addProduct}
                  variant="contained"
                  color="primary"
                >
                  Добавить
                </Button>
                <Button
                  onClick={deleteProduct}
                  variant="contained"
                  disabled={products.length === 1}
                >
                  Удалить
                </Button>
              </ListItem>
            </List>
          </div>
          <div className={classes.formBottomSide}>
            <AddButton text="Добавить накладную" onClick={handleClick} />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddInvoice;
