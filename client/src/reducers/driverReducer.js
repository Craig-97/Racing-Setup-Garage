import {
    FETCH_DRIVERS_PENDING,
    FETCH_DRIVERS_SUCCESS,
    FETCH_DRIVERS_ERROR,
    ADD_DRIVER_SUCCESS,
    UPDATE_DRIVER_SUCCESS,
    DELETE_DRIVER_SUCCESS
  } from '../actions';
  
  import {
    addDriverReducer,
    updateDriverReducer,
    deleteDriverReducer,
    updateDriverToStore,
    deleteDriverFromStore
  } from './driverReducers';
  
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
  
  let fetchDriverReducer = function(state, action) {
    switch (action.type) {
      case FETCH_DRIVERS_PENDING:
        return {
          ...state,
          CRUD: {
            type: 'READ',
            pending: true
          }
        };
      case FETCH_DRIVERS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          CRUD: {
            type: null,
            pending: false
          }
        };
      case ADD_DRIVER_SUCCESS:
        return {
          ...state,
          data: [...state.data, action.payload]
        };
      case UPDATE_DRIVER_SUCCESS:
        return updateDriverToStore(state, action);
      case DELETE_DRIVER_SUCCESS:
        return deleteDriverFromStore(state, action);
      case FETCH_DRIVERS_ERROR:
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
  
  let driverReducer = reduceReducers(
    initialState,
    fetchDriverReducer,
    addDriverReducer,
    updateDriverReducer,
    deleteDriverReducer
  );
  
  export const getDrivers = state => state.drivers.data;
  export const driversCRUDPending = state => state.drivers.CRUD.pending;
  export const driversCRUDError = state => state.drivers.CRUD.error;
  export const driversCRUDMessage = state => state.drivers.CRUD.message;
  export const driversCRUDType = state => state.drivers.CRUD.type;
  
  export default driverReducer;
  