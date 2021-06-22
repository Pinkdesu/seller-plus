import React, { useEffect, useCallback } from 'react';
import { useStore } from 'effector-react';
import * as stores from './store';
import * as events from './store/events';
import { $brands, $categories } from '~/features/Products/store';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { getOptionLabel, getOptionSelected } from './constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import Typography from '@material-ui/core/Typography';
import FileButton from '~/features/Common/FileButton';
import AddButton from '~/features/Common/AddButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InfoItem from './components/InfoItem';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddProduct = () => {
  const classes = useStyles();

  const units = useStore(stores.$units);
  const brands = useStore($brands);
  const categories = useStore($categories);

  const formValues = useStore(stores.$formValues);
  const info = useStore(stores.$infoValues);
  const images = useStore(stores.$images);

  useEffect(() => {
    events.getUnits();
  }, []);

  const handleSelectChange = useCallback(
    (stateName) => (_, value) => {
      const id = +value?.id;
      events.changeFormValues({ stateName, value: id });
    },
    [],
  );

  const handleFieldChange = useCallback(
    (stateName) => (e) => {
      const value = e.target.value;
      events.changeFormValues({ stateName, value });
    },
    [],
  );

  const handleImagesChange = (e) => {
    const files = e.target.files;
    events.addImages(files);
  };

  const handleInfoChange = useCallback(
    (stateName, index) => (e) => {
      const value = e.target.value;
      events.changeInfoValues({ stateName, index, value });
    },
    [],
  );

  const handleInfoUnitChange = useCallback(
    (index) => (_, value) => {
      const id = +value?.id;
      events.changeUnitId({ index, id });
    },
    [],
  );

  const addInfo = () => {
    events.addInfoItem({
      title: '',
      description: '',
      unitId: null,
    });
  };

  const deleteInfo = () => {
    if (info.length === 1) return;

    events.deleteInfoItem();
  };

  const onProduct = () => {
    const correctInfo = info.filter(
      ({ title, description }) => Boolean(title) && Boolean(description),
    );

    events.addProduct({
      ...formValues,
      info: correctInfo,
    });
  };

  return (
    <div className={classes.root}>
      <Container className={classes.pageHeaderWrapper}>
        <Typography variant="h1" className={classes.pageHeader}>
          Добавить Товар
        </Typography>
      </Container>
      <Container className={classes.formWrapper}>
        <form>
          <div className={classes.formFieldsSide}>
            <div className={classes.fieldsWrapper}>
              <TextField
                required
                value={formValues.name}
                onChange={handleFieldChange('name')}
                variant="outlined"
                label="Название товара"
              />
              <SearchSelect
                label="Категория"
                options={categories}
                onChange={handleSelectChange('categoryId')}
                getOptionLabel={getOptionLabel}
                getOptionSelected={getOptionSelected}
              />
              <SearchSelect
                label="Бренд"
                options={brands}
                onChange={handleSelectChange('brandId')}
                getOptionLabel={getOptionLabel}
                getOptionSelected={getOptionSelected}
              />
            </div>
            <div className={classes.fieldsWrapper}>
              <TextField
                required
                type="number"
                value={formValues.supplierPrice}
                onChange={handleFieldChange('supplierPrice')}
                variant="outlined"
                label="Закупочная цена"
              />
              <TextField
                required
                type="number"
                value={formValues.price}
                onChange={handleFieldChange('price')}
                variant="outlined"
                label="Цена продажи"
              />
              <TextField
                required
                type="number"
                value={formValues.count}
                onChange={handleFieldChange('count')}
                variant="outlined"
                label="Количество"
              />
              <TextField
                required
                type="date"
                label="Дата закупки"
                variant="outlined"
                value={formValues.supplierDate}
                onChange={handleFieldChange('supplierDate')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div className={classes.textAreaWrapper}>
            <TextField
              label="Описание"
              rows={10}
              placeholder="Описание товара..."
              fullWidth
              multiline
              value={formValues.description}
              onChange={handleFieldChange('description')}
              variant="outlined"
            />
          </div>
          <div className={classes.infoWrapper}>
            <List className={classes.infoList}>
              {info.map((info, index) => (
                <InfoItem
                  key={index}
                  index={index}
                  title={info.title}
                  onTitle={handleInfoChange}
                  description={info.description}
                  onDescription={handleInfoChange}
                  onUnit={handleInfoUnitChange}
                  units={units}
                />
              ))}
              <ListItem className={classes.infoItem}>
                <Button onClick={addInfo} variant="contained" color="primary">
                  Добавить
                </Button>
                <Button
                  onClick={deleteInfo}
                  variant="contained"
                  disabled={info.length === 1}
                >
                  Удалить
                </Button>
              </ListItem>
            </List>
          </div>
          <div className={classes.formBottomSide}>
            <div styles={{ maxWidth: '150px' }}>
              {images.map((image, index) => (
                <div key={index}>{image.name}</div>
              ))}
            </div>
            <FileButton onChange={handleImagesChange} />
            <AddButton text="Добавить продукт" onClick={onProduct} />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
