import { apiGET, apiPOST } from './apiHelper';

import {
  fetchGamesPending,
  fetchGamesSuccess,
  fetchGamesError,
  addGamePending,
  addGameSuccess,
  addGameError,
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

export const deleteGame = id => dispatch => {
  apiDELETE(dispatch, deleteGamePending, deleteGameSuccess, deleteGameError, id)
};
