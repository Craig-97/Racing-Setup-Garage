export const FETCH_GAMES_PENDING = 'FETCH_GAMES_PENDING';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

export const fetchGamesPending = () => {
    return {
        type: FETCH_GAMES_PENDING
    }
}

export const fetchGamesSuccess = (games) => {
    return {
        type: FETCH_GAMES_SUCCESS,
        payload: games
    }
}

export const fetchGamesError = (error) => {
    return {
        type: FETCH_GAMES_ERROR,
        error: error
    }
}