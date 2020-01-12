//GET SETUPS
export const FETCH_SETUPS_PENDING = 'FETCH_SETUPS_PENDING';
export const FETCH_SETUPS_SUCCESS = 'FETCH_SETUPS_SUCCESS';
export const FETCH_SETUPS_ERROR = 'FETCH_SETUPS_ERROR';

export const fetchSetupsPending = () => {
    return {
        type: FETCH_SETUPS_PENDING
    }
}

export const fetchSetupsSuccess = (setups) => {
    return {
        type: FETCH_SETUPS_SUCCESS,
        payload: setups
    }
}

export const fetchSetupsError = (error) => {
    return {
        type: FETCH_SETUPS_ERROR,
        error: error
    }
}

//POST SETUP
export const ADD_SETUP_PENDING = 'ADD_SETUP_PENDING';
export const ADD_SETUP_SUCCESS = 'ADD_SETUP_SUCCESS';
export const ADD_SETUP_ERROR = 'ADD_SETUP_ERROR';

export const addSetupPending = () => {
    return {
        type: ADD_SETUP_PENDING
    }
}

export const addSetupSuccess = (setup) => {
    return {
        type: ADD_SETUP_SUCCESS,
        payload: setup
    }
}

export const addSetupError = (error) => {
    return {
        type: ADD_SETUP_ERROR,
        error: {...error.data}
    }
}

//PUT SETUP
export const UPDATE_SETUP_PENDING = 'UPDATE_SETUP_PENDING';
export const UPDATE_SETUP_SUCCESS = 'UPDATE_SETUP_SUCCESS';
export const UPDATE_SETUP_ERROR = 'UPDATE_SETUP_ERROR';

export const updateSetupPending = () => {
    return {
        type: UPDATE_SETUP_PENDING
    }
}

export const updateSetupSuccess = (setup) => {
    return {
        type: UPDATE_SETUP_SUCCESS,
        payload: setup
    }
}

export const updateSetupError = (error) => {
    return {
        type: UPDATE_SETUP_ERROR,
        error: {...error.data}
    }
}

//DELETE SETUP
export const DELETE_SETUP_PENDING = 'DELETE_SETUP_PENDING';
export const DELETE_SETUP_SUCCESS = 'DELETE_SETUP_SUCCESS';
export const DELETE_SETUP_ERROR = 'DELETE_SETUP_ERROR';

export const deleteSetupPending = () => {
    return {
        type: DELETE_SETUP_PENDING
    }
}

export const deleteSetupSuccess = (setup) => {
    return {
        type: DELETE_SETUP_SUCCESS,
        payload: setup
    }
}

export const deleteSetupError = (error) => {
    return {
        type: DELETE_SETUP_ERROR,
        error: {...error.data}
    }
}