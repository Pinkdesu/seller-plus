import React, { useCallback } from 'react';
import { useStore } from 'effector-react';
import { $individualFormValues } from '../store';
import { setIndividualFormValue, addIndividualClient } from '../store/events';
import { makeStyles } from '@material-ui/core/styles';
import { ADD_PAGE_STYLE } from '~/features/Common/constants';
import {
  getOptionLabel,
  getOptionSelected,
} from '~/features/AddProduct/constants';
import TextField from '@material-ui/core/TextField';
import SearchSelect from '~/features/Common/SearchSelect';
import AddButton from '~/features/Common/AddButton';

const useStyles = makeStyles(ADD_PAGE_STYLE);

const IndividualForm = (props) => {
  const { districts } = props;

  const classes = useStyles();

  const formValues = useStore($individualFormValues);

  const handleChange = (stateName) => (e) => {
    const value = e.target.value;
    setIndividualFormValue({ stateName, value });
  };

  const handleDistrictChange = useCallback((_, value) => {
    const id = value?.id;
    setIndividualFormValue({ stateName: 'cityDistrictId', value: id });
  }, []);

  const handleClick = () => {
    addIndividualClient(formValues);
  };

  return (
    <form>
      <div className={classes.formFieldsSide}>
        <div className={classes.fieldsWrapper}>
          <TextField
            required
            variant="outlined"
            label="ФИО"
            value={formValues.name}
            onChange={handleChange('name')}
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
            label="Телефон"
            value={formValues.phone}
            onChange={handleChange('phone')}
          />
          <TextField
            required
            variant="outlined"
            label="Адрес"
            value={formValues.address}
            onChange={handleChange('address')}
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
            type="number"
            label="Серия паспорта"
            value={formValues.passportSeries}
            onChange={handleChange('passportSeries')}
          />
          <TextField
            required
            variant="outlined"
            type="number"
            label="Номер паспорта"
            value={formValues.passportNumber}
            onChange={handleChange('passportNumber')}
          />
          <TextField
            required
            variant="outlined"
            label="Кем выдан"
            value={formValues.issued}
            onChange={handleChange('issued')}
          />
          <TextField
            required
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            label="Когда выдан"
            value={formValues.issuedDate}
            onChange={handleChange('issuedDate')}
          />
          <TextField
            required
            variant="outlined"
            label="ИНН"
            value={formValues.inn}
            onChange={handleChange('inn')}
          />
        </div>
      </div>
      <div className={classes.formBottomSide}>
        <AddButton text="Добавить клиента" onClick={handleClick} />
      </div>
    </form>
  );
};

export default IndividualForm;
