import React, { useEffect, useState, useCallback } from 'react';
import { useStore } from 'effector-react';
import { $brands, $categories, $units } from './store';
import { getBrands, getCategories, getUnits, addProduct } from './store/events';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { INFO, getOptionBrand, getOptionCategory } from './constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import FileButton from '~/features/Common/FileButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import InfoItem from './components/InfoItem';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddProduct = () => {
  const classes = useStyles();

  const units = useStore($units);
  const brands = useStore($brands);
  const categories = useStore($categories);

  const [name, setName] = useState();
  const [categoryId, setCategoryId] = useState();
  const [brandId, setBrandId] = useState({});
  const [price, setPrice] = useState(0);
  const [supplierPrice, setSupplierPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  const [info, setInfo] = useState(INFO);

  useEffect(() => {
    getUnits();
    getBrands();
    getCategories();
  }, []);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleCategoryChange = (_, value) => {
    const id = value?.id;
    setCategoryId(id);
  };

  const handleBrandChange = (_, value) => {
    const id = value?.id;
    setBrandId(id);
  };

  const handleSupplierPriceChange = (e) => {
    const value = +e.target.value;
    setSupplierPrice(value);
  };

  const handlePriceChange = (e) => {
    const value = +e.target.value;
    setPrice(value);
  };

  const handleCountChange = (e) => {
    const value = +e.target.value;
    setCount(value);
  };

  const handleDescriptionChange = (e) => {
    const value = e.target.value;
    setDescription(value);
  };

  const handleImagesChange = (e) => {
    const files = e.target.files;
    setImages([...images, ...files]);
  };

  const handleInfoChange = useCallback(
    (stateName, index) => (e) => {
      const value = e.target.value;

      setInfo((prevState) =>
        prevState.map((item, itemIndex) => {
          if (index !== itemIndex) return item;

          return { ...item, [stateName]: value };
        }, []),
      );
    },
    [],
  );

  const handleInfoUnitChange = useCallback(
    (index) => (_, value) => {
      const id = value?.id;

      setInfo((prevState) =>
        prevState.map((item, itemIndex) => {
          if (index !== itemIndex) return item;

          return { ...item, id };
        }, []),
      );
    },
    [],
  );

  const addInfo = () => {
    setInfo([
      ...info,
      {
        title: '',
        description: '',
        unitId: null,
      },
    ]);
  };

  const deleteInfo = () => {
    if (info.length === 1) return;
    const newState = [...info];

    newState.pop();
    setInfo(newState);
  };

  const onProduct = () => {
    const correctInfo = info.filter(
      ({ title, description }) => Boolean(title) && Boolean(description),
    );

    addProduct({
      name,
      count,
      price,
      images,
      brandId,
      categoryId,
      description,
      supplierPrice,
      info: correctInfo,
    });
  };

  const disabled =
    !name ||
    !price ||
    !brandId ||
    !categoryId ||
    !description ||
    !supplierPrice;

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
                value={name}
                onChange={handleNameChange}
                variant="outlined"
                label="Название товара"
              />
              <SearchSelect
                options={categories}
                onChange={handleCategoryChange}
                getOptionLabel={getOptionCategory}
              />
              <SearchSelect
                options={brands}
                onChange={handleBrandChange}
                getOptionLabel={getOptionBrand}
              />
            </div>
            <div className={classes.fieldsWrapper}>
              <TextField
                required
                type="number"
                value={supplierPrice}
                onChange={handleSupplierPriceChange}
                variant="outlined"
                label="Закупочная цена"
              />
              <TextField
                required
                type="number"
                value={price}
                onChange={handlePriceChange}
                variant="outlined"
                label="Цена продажи"
              />
              <TextField
                required
                type="number"
                value={count}
                onChange={handleCountChange}
                variant="outlined"
                label="Количество"
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
              value={description}
              onChange={handleDescriptionChange}
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
            <Button
              variant="contained"
              component="label"
              color="primary"
              disabled={disabled}
              onClick={onProduct}
              startIcon={<PostAddIcon />}
            >
              Добавить продукт
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
