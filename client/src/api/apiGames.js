import { apiGET } from './apiHelper'

import {fetchGamesPending, fetchGamesSuccess, fetchGamesError} from '../actions';

export const fetchGames = () => dispatch => {
  apiGET(dispatch, fetchGamesPending, fetchGamesSuccess, fetchGamesError, 'games')
};
  

//   export const addGame = game => dispatch => {
//     axios
//       .post(`${API_BASE}/games`, game)
//       .then(res =>
//         dispatch({
//           type: FETCH_GAMES_SUCCESS,
//           payload: res.data
//         })
//       )
//       .catch(err =>
//         dispatch(returnErrors(err.response.data, err.response.status))
//       );
//   };
  
//   export const deleteGame = id => dispatch => {
//     axios
//       .delete(`${API_BASE}/games/${id}`)
//       .then(res =>
//         dispatch({
//           type: DELETE_GAME,
//           payload: id
//         })
//       )
//       .catch(err =>
//         dispatch(returnErrors(err.response.data, err.response.status))
//       );
//   };
  
//   export const fetchGamesPending = () => {
//     return {
//       type: FETCH_GAMES_PENDING
//     };
//   };

