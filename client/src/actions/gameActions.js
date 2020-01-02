//GET GAMES
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

//POST GAME
export const ADD_GAME_PENDING = 'ADD_GAME_PENDING';
export const ADD_GAME_SUCCESS = 'ADD_GAME_SUCCESS';
export const ADD_GAME_ERROR = 'ADD_GAME_ERROR';

export const addGamePending = () => {
    return {
        type: ADD_GAME_PENDING
    }
}

export const addGameSuccess = (game) => {
    return {
        type: ADD_GAME_SUCCESS,
        payload: game
    }
}

export const addGameError = (error) => {
    return {
        type: ADD_GAME_ERROR,
        error: {...error.data}
    }
}