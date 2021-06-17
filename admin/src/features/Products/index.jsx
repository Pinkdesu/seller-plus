import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useStore } from 'effector-react';
import { getProducts } from './store/events';
import { $products, $categories, $brands } from './store';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import Container from '@material-ui/core/Container';
import DataTable from '~/features/Common/DataTable';
import Typography from '@material-ui/core/Typography';
import SearchSelect from '~/features/Common/SearchSelect';
import SearchField from '~/features/Common/SearchField';
import AddButton from '~/features/Common/AddButton';
import Header from '~/features/Common/Header';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Products = () => {
  const classes = useStyles();
  const history = useHistory();

  const brands = useStore($brands);
  const products = useStore($products);
  const categories = useStore($categories);

  useEffect(() => {
    getProducts();
  }, []);

  const handleClick = () => {
    history.push('/product');
  };

  return (
    <div className={classes.root}>
      <Header title="Товары" />
      <Container className={classes.formWrapper}>
        <div>
          <div>
            <Typography variant="h6">Фильтры</Typography>
          </div>
          <div className={classes.filtersWrapper}>
            <SearchField
              label="Поиск по сер. номеру"
              className={classes.filter}
            />
            <SearchSelect label="Бренд" className={classes.filter} />
            <SearchSelect label="Категория" className={classes.filter} />
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <DataTable columns={[]} pagesCount={2} data={[]} />
        </div>
        <div className={classes.formBottomSide}>
          <AddButton onClick={handleClick} text="Добавить товар" />
        </div>
      </Container>
    </div>
  );
};

export default Products;
