import React from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export const StandardSelect = ({ defaultValue, onChange, options, className }) => {
  return (
    <div className={className}>
      <InputLabel>Choose Entity</InputLabel>
      <Select value={defaultValue} onChange={onChange}>
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};
