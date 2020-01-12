import { apiGET, apiPOST, apiPUT, apiDELETE } from './apiHelper';

import {
  fetchTracksPending,
  fetchTracksSuccess,
  fetchTracksError,
  addTrackPending,
  addTrackSuccess,
  addTrackError,
  updateTrackPending, 
  updateTrackSuccess, 
  updateTrackError,
  deleteTrackPending,
  deleteTrackSuccess,
  deleteTrackError
} from '../actions';

export const fetchTracks = () => dispatch => {
  apiGET(dispatch, fetchTracksPending, fetchTracksSuccess, fetchTracksError, 'tracks');
};

export const addTrack = track => dispatch => {
  apiPOST(dispatch, addTrackPending, addTrackSuccess, addTrackError, 'track', track);
};

export const updateTrack = (id, object) => dispatch => {
  apiPUT(dispatch, updateTrackPending, updateTrackSuccess, updateTrackError, 'track', id, object)
};

export const deleteTrack = id => dispatch => {
  apiDELETE(dispatch, deleteTrackPending, deleteTrackSuccess, deleteTrackError, 'track', id)
};
