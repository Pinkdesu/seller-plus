import React, { memo } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const DataSelect = (props) => {
  const { data, label, defaultValue, ...otherProps } = props;

  return (
    <FormControl variant="outlined">
      <InputLabel required>{label}</InputLabel>
      <Select label={label} {...otherProps}>
        <MenuItem value={defaultValue}>
          <em>{defaultValue}</em>
        </MenuItem>
        {data.map((value) => (
          <MenuItem key={value[0]} value={value[0]}>
            {value[1]}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText />
    </FormControl>
  );
};

export default memo(DataSelect);
