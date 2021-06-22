import React, { memo } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';

const SearchSelect = (props) => {
  const {
    label,
    options,
    onChange,
    className,
    getOptionLabel,
    getOptionSelected,
    onInputChange,
    loading = false,
  } = props;

  return (
    <Autocomplete
      options={options}
      onChange={onChange}
      onInputChange={onInputChange}
      className={className}
      getOptionLabel={getOptionLabel}
      getOptionSelected={getOptionSelected}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading && <CircularProgress color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default memo(SearchSelect);
