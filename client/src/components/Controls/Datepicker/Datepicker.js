import React, { useState } from 'react';
import moment from 'moment';

import { KeyboardDatePicker } from '@material-ui/pickers';

export const Datepicker = props => {
  const [selectedDate, setSelectedDate] = useState(new moment());
  const { disabled, placeholder, value, onChange, minDate, format } = props;

  const defaults = {
    placeholder: selectedDate.toString(),
    value: selectedDate,
    onChange: date => setSelectedDate(date),
    minDate: new Date('01/01/1900'),
    format: 'DD/MM/YYYY'
  };

  return (
    <KeyboardDatePicker
      clearable
      disabled={disabled}
      placeholder={placeholder ? placeholder : defaults.placeholder}
      value={value ? value : defaults.value}
      onChange={onChange ? onChange : defaults.onChange}
      minDate={minDate ? minDate : defaults.minDate}
      format={format ? format : defaults.format}
    />
  );
};
