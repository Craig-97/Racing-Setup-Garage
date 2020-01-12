//GET TRACKS
export const FETCH_TRACKS_PENDING = 'FETCH_TRACKS_PENDING';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR';

export const fetchTracksPending = () => {
    return {
        type: FETCH_TRACKS_PENDING
    }
}

export const fetchTracksSuccess = (tracks) => {
    return {
        type: FETCH_TRACKS_SUCCESS,
        payload: tracks
    }
}

export const fetchTracksError = (error) => {
    return {
        type: FETCH_TRACKS_ERROR,
        error: error
    }
}

//POST TRACK
export const ADD_TRACK_PENDING = 'ADD_TRACK_PENDING';
export const ADD_TRACK_SUCCESS = 'ADD_TRACK_SUCCESS';
export const ADD_TRACK_ERROR = 'ADD_TRACK_ERROR';

export const addTrackPending = () => {
    return {
        type: ADD_TRACK_PENDING
    }
}

export const addTrackSuccess = (track) => {
    return {
        type: ADD_TRACK_SUCCESS,
        payload: track
    }
}

export const addTrackError = (error) => {
    return {
        type: ADD_TRACK_ERROR,
        error: {...error.data}
    }
}

//PUT TRACK
export const UPDATE_TRACK_PENDING = 'UPDATE_TRACK_PENDING';
export const UPDATE_TRACK_SUCCESS = 'UPDATE_TRACK_SUCCESS';
export const UPDATE_TRACK_ERROR = 'UPDATE_TRACK_ERROR';

export const updateTrackPending = () => {
    return {
        type: UPDATE_TRACK_PENDING
    }
}

export const updateTrackSuccess = (track) => {
    return {
        type: UPDATE_TRACK_SUCCESS,
        payload: track
    }
}

export const updateTrackError = (error) => {
    return {
        type: UPDATE_TRACK_ERROR,
        error: {...error.data}
    }
}

//DELETE TRACK
export const DELETE_TRACK_PENDING = 'DELETE_TRACK_PENDING';
export const DELETE_TRACK_SUCCESS = 'DELETE_TRACK_SUCCESS';
export const DELETE_TRACK_ERROR = 'DELETE_TRACK_ERROR';

export const deleteTrackPending = () => {
    return {
        type: DELETE_TRACK_PENDING
    }
}

export const deleteTrackSuccess = (track) => {
    return {
        type: DELETE_TRACK_SUCCESS,
        payload: track
    }
}

export const deleteTrackError = (error) => {
    return {
        type: DELETE_TRACK_ERROR,
        error: {...error.data}
    }
}