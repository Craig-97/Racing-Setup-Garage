import React, { useState } from 'react';
import moment from 'moment';

import { KeyboardDatePicker } from '@material-ui/pickers';

export const Datepicker = ({ disabled }) => {
  const [selectedDate, setSelectedDate] = useState(new moment());

  return (
    <KeyboardDatePicker
      clearable
      disabled={disabled}
      placeholder={selectedDate.toString()}
      onChange={date => setSelectedDate(date)}
      minDate={new Date('01/01/1900')}
      format={'DD/MM/YYYY'}
    />
  );
};
