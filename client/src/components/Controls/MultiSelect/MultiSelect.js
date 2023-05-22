import React from 'react';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const MultiSelect = ({ name, options, disabled, Controller, control }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options}
      render={({ field }) => (
        <Select {...field} disabled={disabled} multiple>
          {options.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};
