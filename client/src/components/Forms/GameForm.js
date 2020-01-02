import React, { useState, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { AutoForm } from 'uniforms-material';
import { GameSchema } from './Schemas';

import {
  gamesCRUDPending,
  gamesCRUDError,
  gamesCRUDMessage,
  gamesCRUDType
} from '../../reducers/gameReducer';

import { addGame } from '../../api';

export const GameForm = () => {
  const { pending, error, message, type } = useSelector(state => ({
    pending: gamesCRUDPending(state),
    error: gamesCRUDError(state),
    message: gamesCRUDMessage(state),
    type: gamesCRUDType(state)
  }));

  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const SHOW_MESSAGE_DISPLAY_TIME = 5000;

  const onSubmitSuccess = () => {
    if (formRef.current.state.model) {
      let newGame = formRef.current.state.model;
      dispatch(addGame(newGame));
      setShowMessage(true);
    }
  };

  const hideMessageTimeout = () => {
    setTimeout(() => {
      setShowMessage(false);
    }, SHOW_MESSAGE_DISPLAY_TIME);
  };

  const gamePending = () => {
    if (pending && type === 'ADD') {
      return <div>ADDING GAME</div>;
    }
  };

  const gameError = () => {
    if (!pending && error && type === 'ADD' && showMessage) {
      hideMessageTimeout();

      let mainError = error.message;
      let type = error.error.name;
      let description = error.error.message;

      return (
        <div>
          <h2>{mainError}</h2>
          <h4>{type}</h4>
          <h5>{description}</h5>
        </div>
      );
    }
  };

  const gameSuccess = () => {
    if (!pending && message && showMessage) {
      hideMessageTimeout();
      formRef.current.reset();
      return <div>{message}</div>;
    }
  };

  return (
    <section>
      <AutoForm
        ref={formRef}
        autocomplete={"off"}
        className={'game-form'}
        schema={GameSchema}
        onSubmitSuccess={onSubmitSuccess}
        errorsField={() => null}
        showInlineError
      />
      {gamePending()}
      {gameError()}
      {gameSuccess()}
    </section>
  );
};
