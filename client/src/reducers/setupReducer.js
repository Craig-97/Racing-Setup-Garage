import {
  FETCH_SETUPS_PENDING,
  FETCH_SETUPS_SUCCESS,
  FETCH_SETUPS_ERROR,
  ADD_SETUP_SUCCESS,
  UPDATE_SETUP_SUCCESS,
  DELETE_SETUP_SUCCESS
} from '../actions';

import {
  addSetupReducer,
  updateSetupReducer,
  deleteSetupReducer,
  updateSetupToStore,
  deleteSetupFromStore
} from './setupReducers';

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

let fetchSetupReducer = function(state, action) {
  switch (action.type) {
    case FETCH_SETUPS_PENDING:
      return {
        ...state,
        CRUD: {
          type: 'READ',
          pending: true
        }
      };
    case FETCH_SETUPS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        CRUD: {
          type: null,
          pending: false
        }
      };
    case ADD_SETUP_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case UPDATE_SETUP_SUCCESS:
      return updateSetupToStore(state, action);
    case DELETE_SETUP_SUCCESS:
      return deleteSetupFromStore(state, action);
    case FETCH_SETUPS_ERROR:
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

let setupReducer = reduceReducers(
  initialState,
  fetchSetupReducer,
  addSetupReducer,
  updateSetupReducer,
  deleteSetupReducer
);

export const getSetups = state => state.setups.data;
export const setupsCRUDPending = state => state.setups.CRUD.pending;
export const setupsCRUDError = state => state.setups.CRUD.error;
export const setupsCRUDMessage = state => state.setups.CRUD.message;
export const setupsCRUDType = state => state.setups.CRUD.type;

export default setupReducer;
