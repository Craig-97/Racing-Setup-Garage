import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { addGame } from '../../api';
import { useForm } from 'react-hook-form';

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
  const { register, handleSubmit, reset, errors, formState } = useForm();
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
      data.releaseDate = new Date(data.releaseDate);
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

  return (
    <section>
      <form className='game-form' onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type='text'
          name='name'
          disabled={disabled}
          ref={register({ required: true, maxLength: 80 })}
        />
        {errors.name && <p>Name is required</p>}

        <label>Platform</label>
        <select
          multiple
          name='platform'
          disabled={disabled}
          ref={register({ required: true })}
        >
          <option value='PC'>PC</option>
          <option value='Playstation'>Playstation</option>
          <option value='Xbox'>Xbox</option>
        </select>
        {errors.platform && <p>At least one Platform is required</p>}

        <label>Image URL</label>
        <input
          type='url'
          name='imageURL'
          disabled={disabled}
          ref={register({ pattern: /^\S+@\S+$/i })}
        />

        <label>Developer</label>
        <input
          type='text'
          name='developer'
          disabled={disabled}
          ref={register}
        />

        <label>Release Date</label>
        <input
          type='datetime'
          placeholder='DD/MM/YYYY'
          name='releaseDate'
          disabled={disabled}
          ref={register}
        />

        <input type='submit' disabled={disabled} />
      </form>

      {showMessage && (
        <div className='game-form__messages'>
          {showMessageType === 'pending' && (
            <>
              <CircularProgress size={100} /> <h2>ADDING GAME</h2>
            </>
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
      )}
    </section>
  );
};
