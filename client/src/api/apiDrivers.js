import { apiGET, apiPOST, apiPUT, apiDELETE } from './apiHelper';

import {
  fetchDriversPending,
  fetchDriversSuccess,
  fetchDriversError,
  addDriverPending,
  addDriverSuccess,
  addDriverError,
  updateDriverPending, 
  updateDriverSuccess, 
  updateDriverError,
  deleteDriverPending,
  deleteDriverSuccess,
  deleteDriverError
} from '../actions';

export const fetchDrivers = () => dispatch => {
  apiGET(dispatch, fetchDriversPending, fetchDriversSuccess, fetchDriversError, 'drivers');
};

export const addDriver = driver => dispatch => {
  apiPOST(dispatch, addDriverPending, addDriverSuccess, addDriverError, 'driver', driver);
};

export const updateDriver = (id, object) => dispatch => {
  apiPUT(dispatch, updateDriverPending, updateDriverSuccess, updateDriverError, 'driver', id, object)
};

export const deleteDriver = id => dispatch => {
  apiDELETE(dispatch, deleteDriverPending, deleteDriverSuccess, deleteDriverError, 'driver', id)
};
