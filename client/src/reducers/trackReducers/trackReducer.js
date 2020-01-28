import {
  FETCH_TRACKS_PENDING,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR
} from '../../actions';

import {
  addTrackReducer,
  updateTrackReducer,
  deleteTrackReducer
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

let fetchTrackReducer = function(state, action) {
  switch (action.type) {
    case FETCH_TRACKS_PENDING:
      return {
        ...state,
        CRUD: {
          type: 'READ',
          pending: true
        }
      };
    case FETCH_TRACKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        CRUD: {
          type: null,
          pending: false
        }
      };
    case FETCH_TRACKS_ERROR:
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

let trackReducer = reduceReducers(
  initialState,
  fetchTrackReducer,
  addTrackReducer,
  updateTrackReducer,
  deleteTrackReducer
);

export const getTracks = state => state.tracks.data;
export const tracksCRUDPending = state => state.tracks.CRUD.pending;
export const tracksCRUDError = state => state.tracks.CRUD.error;
export const tracksCRUDMessage = state => state.tracks.CRUD.message;
export const tracksCRUDType = state => state.tracks.CRUD.type;

export default trackReducer;
