import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { KeyboardDatePicker } from '@material-ui/pickers';

import { addGame } from '../../api';
import { useForm, Controller } from 'react-hook-form';

import {
  gamesCRUDPending,
  gamesCRUDError,
  gamesCRUDMessage,
  gamesCRUDType
} from '../../reducers/gameReducer';

export const GameForm = () => {
  const { pending, error, message, type } = useSelector(state => ({
    pending: gamesCRUDPending(state),
    error: gamesCRUDError(state),
    message: gamesCRUDMessage(state),
    type: gamesCRUDType(state)
  }));

  const dispatch = useDispatch();
  const SHOW_MESSAGE_DISPLAY_TIME = 5000;
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageType, setShowMessageType] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    reset,
    errors,
    formState,
    control
  } = useForm();
  let disabled = showMessageType === 'pending';

  useEffect(() => {
    if (!pending && message && showMessage) {
      // Success
      setShowMessageType('success');
      hideMessageTimeout();
      resetForm();
    } else if (!pending && error && type === 'ADD' && showMessage) {
      // Error
      setShowMessageType('error');
      hideMessageTimeout();
    } else if (pending && type === 'ADD') {
      // Pending
      setShowMessageType('pending');
    }
    // eslint-disable-next-line
  }, [pending, error, message, type]);

  const onSubmit = data => {
    if (data) {
      const submitData = formatData(data);
      setShowMessage(true);
      dispatch(addGame(submitData));
    }
  };

  const formatData = data => {
    // Format Date
    if (data.releaseDate) {
      data.releaseDate = data.releaseDate.toDate();
    }
    return data;
  };

  const resetForm = () => {
    if (formState && formState.dirty && formState.isSubmitted) {
      reset();
    }
  };

  const hideMessageTimeout = () => {
    setTimeout(() => {
      setShowMessage(false);
    }, SHOW_MESSAGE_DISPLAY_TIME);
  };

  const renderMessages = () => {
    return (
      <div className='game-form__messages'>
        {showMessageType === 'pending' && (
          <>
            <CircularProgress size={100} /> <h2>ADDING GAME</h2>
          </>
        )}
        {showMessageType === 'error' && (
          <>
            <h2>{error?.message}</h2>
            <h4>{error?.error.name}</h4>
            <h5>{error?.error.message}</h5>
          </>
        )}
        {showMessageType === 'success' && <h2>{message}</h2>}
      </div>
    );
  };

  return (
    <section>
      <form
        autoComplete='off'
        className='game-form'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>Name</label>
        <TextField
          name='name'
          autoComplete='off'
          inputRef={register({ required: true, maxLength: 80 })}
          disabled={disabled}
        />
        {errors.name && <p>Name is required</p>}
        <label>Platform</label>
        <Controller
          as={
            <Select disabled={disabled} multiple>
              <MenuItem value={'PC'}>PC</MenuItem>
              <MenuItem value={'Playstation'}>Playstation</MenuItem>
              <MenuItem value={'Xbox'}>Xbox</MenuItem>
            </Select>
          }
          name='platform'
          control={control}
          defaultValue={['PC', 'Playstation', 'Xbox']}
        />
        {errors.platform && <p>At least one Platform is required</p>}
        <label>Image URL</label>

        <TextField name='imageURL' inputRef={register} disabled={disabled} />
        <label>Developer</label>

        <TextField name='developer' inputRef={register} disabled={disabled} />
        <label>Release Date</label>

        <Controller
          as={
            <KeyboardDatePicker
              clearable
              placeholder='01/01/2020'
              onChange={date => setSelectedDate(date)}
              minDate={new Date()}
              format={'DD/MM/YYYY'}
            />
          }
          name='releaseDate'
          control={control}
          defaultValue={selectedDate}
        />

        <input type='submit' disabled={disabled} />
      </form>
      {showMessage && renderMessages()}
    </section>
  );
};
