//GET DRIVERS
export const FETCH_DRIVERS_PENDING = 'FETCH_DRIVERS_PENDING';
export const FETCH_DRIVERS_SUCCESS = 'FETCH_DRIVERS_SUCCESS';
export const FETCH_DRIVERS_ERROR = 'FETCH_DRIVERS_ERROR';

export const fetchDriversPending = () => {
    return {
        type: FETCH_DRIVERS_PENDING
    }
}

export const fetchDriversSuccess = (drivers) => {
    return {
        type: FETCH_DRIVERS_SUCCESS,
        payload: drivers
    }
}

export const fetchDriversError = (error) => {
    return {
        type: FETCH_DRIVERS_ERROR,
        error: error
    }
}

//POST DRIVER
export const ADD_DRIVER_PENDING = 'ADD_DRIVER_PENDING';
export const ADD_DRIVER_SUCCESS = 'ADD_DRIVER_SUCCESS';
export const ADD_DRIVER_ERROR = 'ADD_DRIVER_ERROR';

export const addDriverPending = () => {
    return {
        type: ADD_DRIVER_PENDING
    }
}

export const addDriverSuccess = (driver) => {
    return {
        type: ADD_DRIVER_SUCCESS,
        payload: driver
    }
}

export const addDriverError = (error) => {
    return {
        type: ADD_DRIVER_ERROR,
        error: {...error.data}
    }
}

//PUT DRIVER
export const UPDATE_DRIVER_PENDING = 'UPDATE_DRIVER_PENDING';
export const UPDATE_DRIVER_SUCCESS = 'UPDATE_DRIVER_SUCCESS';
export const UPDATE_DRIVER_ERROR = 'UPDATE_DRIVER_ERROR';

export const updateDriverPending = () => {
    return {
        type: UPDATE_DRIVER_PENDING
    }
}

export const updateDriverSuccess = (driver) => {
    return {
        type: UPDATE_DRIVER_SUCCESS,
        payload: driver
    }
}

export const updateDriverError = (error) => {
    return {
        type: UPDATE_DRIVER_ERROR,
        error: {...error.data}
    }
}

//DELETE DRIVER
export const DELETE_DRIVER_PENDING = 'DELETE_DRIVER_PENDING';
export const DELETE_DRIVER_SUCCESS = 'DELETE_DRIVER_SUCCESS';
export const DELETE_DRIVER_ERROR = 'DELETE_DRIVER_ERROR';

export const deleteDriverPending = () => {
    return {
        type: DELETE_DRIVER_PENDING
    }
}

export const deleteDriverSuccess = (driver) => {
    return {
        type: DELETE_DRIVER_SUCCESS,
        payload: driver
    }
}

export const deleteDriverError = (error) => {
    return {
        type: DELETE_DRIVER_ERROR,
        error: {...error.data}
    }
}