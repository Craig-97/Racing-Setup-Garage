//GET CARS
export const FETCH_CARS_PENDING = 'FETCH_CARS_PENDING';
export const FETCH_CARS_SUCCESS = 'FETCH_CARS_SUCCESS';
export const FETCH_CARS_ERROR = 'FETCH_CARS_ERROR';

export const fetchCarsPending = () => {
    return {
        type: FETCH_CARS_PENDING
    }
}

export const fetchCarsSuccess = (cars) => {
    return {
        type: FETCH_CARS_SUCCESS,
        payload: cars
    }
}

export const fetchCarsError = (error) => {
    return {
        type: FETCH_CARS_ERROR,
        error: error
    }
}

//POST CAR
export const ADD_CAR_PENDING = 'ADD_CAR_PENDING';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const ADD_CAR_ERROR = 'ADD_CAR_ERROR';

export const addCarPending = () => {
    return {
        type: ADD_CAR_PENDING
    }
}

export const addCarSuccess = (car) => {
    return {
        type: ADD_CAR_SUCCESS,
        payload: car
    }
}

export const addCarError = (error) => {
    return {
        type: ADD_CAR_ERROR,
        error: {...error.data}
    }
}

//PUT CAR
export const UPDATE_CAR_PENDING = 'UPDATE_CAR_PENDING';
export const UPDATE_CAR_SUCCESS = 'UPDATE_CAR_SUCCESS';
export const UPDATE_CAR_ERROR = 'UPDATE_CAR_ERROR';

export const updateCarPending = () => {
    return {
        type: UPDATE_CAR_PENDING
    }
}

export const updateCarSuccess = (car) => {
    return {
        type: UPDATE_CAR_SUCCESS,
        payload: car
    }
}

export const updateCarError = (error) => {
    return {
        type: UPDATE_CAR_ERROR,
        error: {...error.data}
    }
}

//DELETE CAR
export const DELETE_CAR_PENDING = 'DELETE_CAR_PENDING';
export const DELETE_CAR_SUCCESS = 'DELETE_CAR_SUCCESS';
export const DELETE_CAR_ERROR = 'DELETE_CAR_ERROR';

export const deleteCarPending = () => {
    return {
        type: DELETE_CAR_PENDING
    }
}

export const deleteCarSuccess = (car) => {
    return {
        type: DELETE_CAR_SUCCESS,
        payload: car
    }
}

export const deleteCarError = (error) => {
    return {
        type: DELETE_CAR_ERROR,
        error: {...error.data}
    }
}