import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import { $brands, $categories, $units } from './store';
import { getBrands, getCategories, getUnits } from './store/events';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import { INFO } from './constants';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import FileButton from '~/features/Common/FileButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const AddProduct = () => {
  const classes = useStyles();

  const units = useStore($units);
  const brands = useStore($brands);
  const categories = useStore($categories);

  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [brand, setBrand] = useState({});
  const [price, setPrice] = useState(0);
  const [supplierPrice, setSupplierPrice] = useState(0);
  const [count, setCount] = useState(1);
  const [files, setFiles] = useState([]);
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
    setCategory(id);
  };

  const handleBrandChange = (_, value) => {
    const id = value?.id;
    setBrand(id);
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

  const handleFilesChange = (e) => {
    const files = e.target.files;
    setFiles((prevState) => [...prevState, ...files]);
  };

  const handleInfoChange = (stateName, index) => (e) => {
    const value = e.target.value;

    setInfo((prevState) => {
      const newState = [...prevState];
      const newItem = {
        ...newState[index],
        [stateName]: value,
      };

      newState.splice(index, 1, newItem);
      return newState;
    });
  };

  const handleInfoUnitChange = (index) => (_, value) => {
    const id = value?.id;

    setInfo((prevState) => {
      const newState = [...prevState];
      const newItem = {
        ...newState[index],
        unitId: id,
      };

      newState.splice(index, 1, newItem);
      return newState;
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
                value={name}
                onChange={handleNameChange}
                variant="outlined"
                label="Название товара"
              />
              <Autocomplete
                options={categories}
                onChange={handleCategoryChange}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    label="Категория"
                    variant="outlined"
                  />
                )}
              />
              <Autocomplete
                options={brands}
                onChange={handleBrandChange}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    required
                    label="Бренд"
                    variant="outlined"
                  />
                )}
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
                <ListItem key={index} className={classes.infoItem}>
                  <TextField
                    required
                    value={info.title}
                    onChange={handleInfoChange('title', index)}
                    variant="outlined"
                    label="Название характеристики"
                    className={classes.infoTextField}
                  />
                  <TextField
                    required
                    value={info.title}
                    onChange={handleInfoChange('description', index)}
                    variant="outlined"
                    label="Значение"
                    className={classes.infoTextField}
                  />
                  <Autocomplete
                    options={units}
                    onChange={handleInfoUnitChange(index)}
                    getOptionLabel={(option) => option.value}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Ед. измер."
                        variant="outlined"
                      />
                    )}
                  />
                </ListItem>
              ))}
            </List>
          </div>
          <div className={classes.formBottomSide}>
            <div styles={{ maxWidth: '150px' }}>
              {files.map((file, index) => (
                <div key={index}>{file.name}</div>
              ))}
            </div>
            <FileButton onChange={handleFilesChange} />
            <Button
              variant="contained"
              component="label"
              color="primary"
              startIcon={<PostAddIcon />}
            >
              Создать разрешение
            </Button>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddProduct;
