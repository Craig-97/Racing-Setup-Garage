import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

export const MultiSelect = ({ name, options, disabled, Controller, control }) => {
  return (
    <Controller
      as={
        <Select disabled={disabled} multiple>
          {options.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      }
      name={name}
      control={control}
      defaultValue={options}
    />
  );
};
