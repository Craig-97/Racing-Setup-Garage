import { FETCH_GAMES_PENDING, FETCH_GAMES_SUCCESS, FETCH_GAMES_ERROR } from '../actions/gameActions';


const initialState = {
    pending: false,
    data: [],
    error: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_GAMES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_GAMES_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload
            }
        case FETCH_GAMES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getGames = state => state.games.data;
export const getGamesPending = state => state.games.pending;
export const getGamesError = state => state.games.error;
