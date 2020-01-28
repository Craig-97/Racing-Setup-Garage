import {
    FETCH_CARS_PENDING,
    FETCH_CARS_SUCCESS,
    FETCH_CARS_ERROR
  } from '../../actions';
  
  import {
    addCarReducer,
    updateCarReducer,
    deleteCarReducer
  } from './'
  
  import reduceReducers from 'reduce-reducers';
  
  const initialState = {
    data: [],
    CRUD: {
      type: null,
      pending: false,
      message: null,
      error: null
    }
  };
  
  let fetchCarReducer = function(state, action) {
    switch (action.type) {
      case FETCH_CARS_PENDING:
        return {
          ...state,
          CRUD: {
            type: 'READ',
            pending: true
          }
        };
      case FETCH_CARS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          CRUD: {
            type: null,
            pending: false
          }
        };
      case FETCH_CARS_ERROR:
        return {
          ...state,
          CRUD: {
            type: 'READ',
            pending: false,
            error: action.error
          }
        };
      default:
        return state;
    }
  };
  
  let carReducer = reduceReducers(
    initialState,
    fetchCarReducer,
    addCarReducer,
    updateCarReducer,
    deleteCarReducer
  );
  
  export const getCars = state => state.cars.data;
  export const carsCRUDPending = state => state.cars.CRUD.pending;
  export const carsCRUDError = state => state.cars.CRUD.error;
  export const carsCRUDMessage = state => state.cars.CRUD.message;
  export const carsCRUDType = state => state.cars.CRUD.type;
  
  export default carReducer;
  