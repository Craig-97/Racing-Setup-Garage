import axios from 'axios';
import { GET_GAMES, ADD_GAME, DELETE_GAME, GAMES_LOADING } from './types';
import { returnErrors } from './errorActions';

const API_BASE = 'http://localhost:4000/api';

export const getGames = () => dispatch => {

  dispatch(setGamesLoading());
  axios
    .get(`${API_BASE}/games`)
    .then(res =>
      dispatch({
        type: GET_GAMES,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const addGame = game => (dispatch) => {
  axios
    .post(`${API_BASE}/games`, game)
    .then(res =>
      dispatch({
        type: ADD_GAME,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteGame = id => (dispatch) => {
  axios
    .delete(`${API_BASE}/games/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_GAME,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setGamesLoading = () => {
  return {
    type: GAMES_LOADING
  };
};