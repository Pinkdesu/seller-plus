import React, { useEffect, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import { useStore } from 'effector-react';
import { getProducts, resetProducts } from './store/events';
import useScrollLoader from '~/utils/useScrollLoader';
import * as stores from './store';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { COLUMNS } from './constants';
import {
  getOptionLabel,
  getOptionSelected,
} from '~/features/AddProduct/constants';
import Container from '@material-ui/core/Container';
import DataTable from '~/features/Common/DataTable';
import Typography from '@material-ui/core/Typography';
import SearchSelect from '~/features/Common/SearchSelect';
import AddButton from '~/features/Common/AddButton';
import Header from '~/features/Common/Header';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const Products = () => {
  const classes = useStyles();
  const history = useHistory();

  const brands = useStore(stores.$brands);
  const products = useStore(stores.$products);
  const categories = useStore(stores.$categories);
  const pageNumber = useStore(stores.$pageNumber);
  const hasMore = useStore(stores.$hasMore);

  const [brandId, setBrandId] = useState();
  const [categoryId, setCategoryId] = useState();

  useEffect(() => {
    if (products.length === 0) {
      getProducts();
    }
    return () => resetProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Boolean(categoryId) || Boolean(brandId)) {
      getProducts({ categoryId, brandId });
      resetProducts();
    }
  }, [categoryId, brandId]);

  const handleClick = () => {
    history.push('/product');
  };

  const onBrand = useCallback((_, value) => {
    const id = value?.id;
    setBrandId(id);
  }, []);

  const onCategory = useCallback((_, value) => {
    const id = value?.id;
    setCategoryId(id);
  }, []);

  const getMoreProducts = useCallback(() => {
    getProducts({ page: pageNumber, categoryId, brandId });
  }, [pageNumber, categoryId, brandId]);

  const loadScroll = useScrollLoader(getMoreProducts, {
    hasMore,
    perOffset: 20,
  });

  return (
    <div className={classes.root}>
      <Header title="Товары" />
      <Container className={classes.formWrapper}>
        <div>
          <div>
            <Typography variant="h6">Фильтры</Typography>
          </div>
          <div className={classes.filtersWrapper}>
            <SearchSelect
              label="Бренд"
              options={brands}
              onChange={onBrand}
              className={classes.filter}
              getOptionLabel={getOptionLabel}
              getOptionSelected={getOptionSelected}
            />
            <SearchSelect
              label="Категория"
              options={categories}
              onChange={onCategory}
              className={classes.filter}
              getOptionLabel={getOptionLabel}
              getOptionSelected={getOptionSelected}
            />
          </div>
        </div>
        <div className={classes.tableWrapper}>
          <DataTable data={products} columns={COLUMNS} onScroll={loadScroll} />
        </div>
        <div className={classes.formBottomSide}>
          <AddButton onClick={handleClick} text="Добавить товар" />
        </div>
      </Container>
    </div>
  );
};

export default Products;
