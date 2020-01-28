import {
  FETCH_SETUPS_PENDING,
  FETCH_SETUPS_SUCCESS,
  FETCH_SETUPS_ERROR
} from '../../actions';

import {
  addSetupReducer,
  updateSetupReducer,
  deleteSetupReducer
} from './';

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
