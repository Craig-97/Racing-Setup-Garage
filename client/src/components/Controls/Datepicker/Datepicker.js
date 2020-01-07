import React, { useState } from "react";
import moment from "moment";

import { KeyboardDatePicker } from "@material-ui/pickers";

import "./Datepicker.scss";

export const Datepicker = ({name, disabled, Controller, control}) => {
  const [selectedDate, setSelectedDate] = useState(new moment());

  return (
    <Controller
    as={
      <KeyboardDatePicker
        clearable
        disabled={disabled}
        placeholder={selectedDate.toString()}
        onChange={date => setSelectedDate(date)}
        minDate={new Date()}
        format={'DD/MM/YYYY'}
      />
    }
    name={name}
    control={control}
    defaultValue={selectedDate}
  />
  );
};
