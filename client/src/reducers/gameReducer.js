import {
  FETCH_GAMES_PENDING,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
  ADD_GAME_PENDING,
  ADD_GAME_SUCCESS,
  ADD_GAME_ERROR
} from '../actions/gameActions';

const initialState = {
  pending: false,
  data: [],
  error: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_GAMES_PENDING:
    case ADD_GAME_PENDING:
      return {
        ...state,
        pending: true
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload
      };
    case ADD_GAME_SUCCESS:
    return {
        ...state,
        pending: false,
        data: [...state.games.data, ...action.payload]
    };
    case FETCH_GAMES_ERROR:
    case ADD_GAME_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      };
    default:
      return state;
  }
}

export const getGames = state => state.games.data;
export const getGamesPending = state => state.games.pending;
export const getGamesError = state => state.games.error;
