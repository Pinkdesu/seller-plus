import React from 'react';
import TextField from '@material-ui/core/TextField';

const DatePicker = (props) => {
  const { label, value, onChange, min, max } = props;

  return (
    <TextField
      required
      type="date"
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      InputProps={{
        inputProps: {
          min: min,
          max: max,
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
};

export default DatePicker;
