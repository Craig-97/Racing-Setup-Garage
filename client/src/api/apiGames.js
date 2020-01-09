import { apiGET, apiPOST, apiPUT, apiDELETE } from './apiHelper';

import {
  fetchGamesPending,
  fetchGamesSuccess,
  fetchGamesError,
  addGamePending,
  addGameSuccess,
  addGameError,
  updateGamePending, 
  updateGameSuccess, 
  updateGameError,
  deleteGamePending,
  deleteGameSuccess,
  deleteGameError
} from '../actions';

export const fetchGames = () => dispatch => {
  apiGET(dispatch, fetchGamesPending, fetchGamesSuccess, fetchGamesError, 'games');
};

export const addGame = game => dispatch => {
  apiPOST(dispatch, addGamePending, addGameSuccess, addGameError, 'game', game);
};

export const updateGame = (id, object) => dispatch => {
  apiPUT(dispatch, updateGamePending, updateGameSuccess, updateGameError, 'game', id, object)
};

export const deleteGame = id => dispatch => {
  apiDELETE(dispatch, deleteGamePending, deleteGameSuccess, deleteGameError, 'game', id)
};
