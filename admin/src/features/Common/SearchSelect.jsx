import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const SearchSelect = (props) => {
  const { options, onChange, getOptionLabel, label } = props;

  return (
    <Autocomplete
      options={options}
      onChange={onChange}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
    />
  );
};

export default memo(SearchSelect);
