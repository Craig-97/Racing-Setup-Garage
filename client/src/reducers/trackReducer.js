import {
  FETCH_TRACKS_PENDING,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR,
  ADD_TRACK_SUCCESS,
  UPDATE_TRACK_SUCCESS,
  DELETE_TRACK_SUCCESS
} from '../actions/trackActions';

import {
  addTrackReducer,
  updateTrackReducer,
  deleteTrackReducer,
  updateTrackToStore,
  deleteTrackFromStore
} from './trackReducers';

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
    case ADD_TRACK_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case UPDATE_TRACK_SUCCESS:
      return updateTrackToStore(state, action);
    case DELETE_TRACK_SUCCESS:
      return deleteTrackFromStore(state, action);
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
