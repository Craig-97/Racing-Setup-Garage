import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Datepicker, MultiSelect } from '../Controls';

import { addGame, updateGame } from '../../api';
import { useForm, Controller } from 'react-hook-form';

import {
  gamesCRUDPending,
  gamesCRUDError,
  gamesCRUDMessage,
  gamesCRUDType
} from '../../reducers/gameReducer';

export const GameForm = ({
  BEM_BASE,
  game,
  showMessage,
  hideMessage,
  setShowMessage
}) => {
  const { pending, error, message, type } = useSelector(state => ({
    pending: gamesCRUDPending(state),
    error: gamesCRUDError(state),
    message: gamesCRUDMessage(state),
    type: gamesCRUDType(state)
  }));

  const dispatch = useDispatch();
  const [showMessageType, setShowMessageType] = useState(null);
  let disabled = showMessageType === 'pending';
  let validType = type === 'ADD' || type === 'UPDATE' || type === 'DELETE';

  const {
    register,
    handleSubmit,
    reset,
    errors,
    formState,
    control,
    setValue
  } = useForm();

  /* DISPLAYS CURRENT API REQUEST STATUS & RESETS FORM WHEN SUCCESSFUL */
  useEffect(() => {
    if (!pending && message && showMessage) {
      // Success
      setShowMessageType('success');
      hideMessage();
      resetForm();
    } else if (!pending && error && showMessage && validType) {
      // Error
      setShowMessageType('error');
      hideMessage();
    } else if (pending && validType) {
      // Pending
      setShowMessageType('pending');
    }
    // eslint-disable-next-line
  }, [pending, error, message, type]);

  /* UPDATES FIELD VALUES BASED ON GAME PROP CHANGES */
  useEffect(() => {
    if (game) {
      setValue('name', game.name);
      setValue('platform', game.platform);
      setValue('imageURL', game.imageURL);
      setValue('developer', game.developer);
      setValue('releaseDate', game.releaseDate);
    } else if (!game) {
      reset();
    }
  }, [game]);

  /* FORMATS GAME DATA BEFORE API REQUEST */
  const formatData = data => {
    if (data.releaseDate && data.releaseDate.toDate) {
      data.releaseDate = data.releaseDate.toDate();
    }
    return data;
  };

  /* UPDATES OR ADDS GAME ON SUBMIT DEPENDING ON GAME PROP */
  const onSubmit = data => {
    if (data) {
      const submitData = formatData(data);
      setShowMessage();
      if (game) {
        dispatch(updateGame(game._id, submitData));
      } else {
        dispatch(addGame(submitData));
      }
    }
  };

  /* RESETS FORM IF FORM STATE IS DIRTY & FORM SUBMITTED SUCCESSFULLY */
  const resetForm = () => {
    if (formState && formState.dirty && formState.isSubmitted) {
      reset();
    }
  };

  /* RENDERS MESSAGES BASED ON CURRENT MESSAGE TYPE */
  const renderMessages = () => {
    let errorHeader, errorName, errorMsg = '';
    if (error && error.error) {
      errorHeader = error.message;
      errorName = error.error.name;
      errorMsg = error.error.message
    }
    return (
      <div className='game-form__messages'>
        {showMessageType === 'pending' && (
          <Fragment>
            <CircularProgress size={100} />
            <h2>
              {type === 'ADD' && 'Adding Game'}
              {type === 'UPDATE' && 'Updating Game'}
              {type === 'DELETE' && 'Deleting Game'}
            </h2>
          </Fragment>
        )}
        {showMessageType === 'error' && (
          <Fragment>
            <h2>{errorHeader}</h2>
            <h4>{errorName}</h4>
            <h5>{errorMsg}</h5>
          </Fragment>
        )}
        {showMessageType === 'success' && <h2>{message}</h2>}
      </div>
    );
  };

  return (
    <div className={`${BEM_BASE}-form`}>
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
        <MultiSelect
          name={'platform'}
          options={['PC', 'Playstation', 'Xbox']}
          disabled={disabled}
          Controller={Controller}
          control={control}
        />
        {errors.platform && <p>At least one Platform is required</p>}

        <label>Image URL</label>
        <TextField name='imageURL' inputRef={register} disabled={disabled} />

        <label>Developer</label>
        <TextField name='developer' inputRef={register} disabled={disabled} />

        <label>Release Date</label>
        <Datepicker
          name={'releaseDate'}
          disabled={disabled}
          Controller={Controller}
          control={control}
        />

        <input type='submit' disabled={disabled} />
      </form>
      {showMessage && renderMessages()}
    </div>
  );
};
