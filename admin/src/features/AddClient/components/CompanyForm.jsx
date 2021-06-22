import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from 'effector-react';
import { $companyFormValues } from '../store';
import { setCompanyFormValue, addCompanyClient } from '../store/events';
import {
  getOptionLabel,
  getOptionSelected,
} from '~/features/AddProduct/constants';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import AddButton from '~/features/Common/AddButton';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const CompanyForm = (props) => {
  const { districts } = props;

  const classes = useStyles();

  const formValues = useStore($companyFormValues);

  const handleChange = (stateName) => (e) => {
    const value = e.target.value;
    setCompanyFormValue({ stateName, value });
  };

  const handleDistrictChange = useCallback((_, value) => {
    const id = value?.id;
    setCompanyFormValue({ stateName: 'cityDistrictId', value: id });
  }, []);

  const handleClick = () => {
    addCompanyClient(formValues);
  };

  return (
    <form>
      <div className={classes.formFieldsSide}>
        <div className={classes.fieldsWrapper}>
          <TextField
            required
            variant="outlined"
            label="Название компании"
            value={formValues.companyName}
            onChange={handleChange('companyName')}
          />
          <TextField
            required
            variant="outlined"
            label="Юридический адрес"
            value={formValues.legalAddress}
            onChange={handleChange('legalAddress')}
          />
          <TextField
            required
            variant="outlined"
            label="ИНН"
            value={formValues.inn}
            onChange={handleChange('inn')}
          />
          <SearchSelect
            label="Район"
            options={districts}
            getOptionLabel={getOptionLabel}
            getOptionSelected={getOptionSelected}
            onChange={handleDistrictChange}
          />
        </div>
        <div className={classes.fieldsWrapper}>
          <TextField
            required
            variant="outlined"
            label="ОГРН"
            value={formValues.ogrn}
            onChange={handleChange('ogrn')}
          />
          <TextField
            required
            variant="outlined"
            label="Номер телефона"
            value={formValues.phone}
            onChange={handleChange('phone')}
          />
          <TextField
            required
            variant="outlined"
            label="Email"
            value={formValues.email}
            onChange={handleChange('email')}
          />
          <TextField
            required
            variant="outlined"
            label="ФИО ответственного"
            value={formValues.name}
            onChange={handleChange('name')}
          />
        </div>
      </div>
      <div className={classes.formBottomSide}>
        <AddButton text="Добавить клиента" onClick={handleClick} />
      </div>
    </form>
  );
};

export default CompanyForm;
