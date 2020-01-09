import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Datepicker, MultiSelect } from '../Controls';

import { addGame, updateGame, deleteGame } from '../../api';
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
  hideMessageTimeout,
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

  useEffect(() => {
    if (!pending && message && showMessage) {
      // Success
      setShowMessageType('success');
      hideMessageTimeout();
      resetForm();
    } else if (!pending && error && showMessage && validType) {
      // Error
      setShowMessageType('error');
      hideMessageTimeout();
    } else if (pending && validType) {
      // Pending
      setShowMessageType('pending');
    }
    // eslint-disable-next-line
  }, [pending, error, message, type]);

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

  const onSubmit = data => {
    if (data) {
      const submitData = formatData(data);
      setShowMessage(true);
      if (game) {
        dispatch(updateGame(game._id, submitData));
      } else {
        dispatch(addGame(submitData));
      }
    }
  };

  const formatData = data => {
    // Format Date
    if (data.releaseDate && data.releaseDate.toDate) {
      data.releaseDate = data.releaseDate.toDate();
    }
    return data;
  };

  const resetForm = () => {
    if (formState && formState.dirty && formState.isSubmitted) {
      reset();
    }
  };

  const renderMessages = () => {
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
          <>
            <h2>{error.message}</h2>
            <h4>{error.error.name}</h4>
            <h5>{error.error.message}</h5>
          </>
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
