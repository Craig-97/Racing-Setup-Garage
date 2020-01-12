import { apiGET, apiPOST, apiPUT, apiDELETE } from './apiHelper';

import {
  fetchSetupsPending,
  fetchSetupsSuccess,
  fetchSetupsError,
  addSetupPending,
  addSetupSuccess,
  addSetupError,
  updateSetupPending, 
  updateSetupSuccess, 
  updateSetupError,
  deleteSetupPending,
  deleteSetupSuccess,
  deleteSetupError
} from '../actions';

export const fetchSetups = () => dispatch => {
  apiGET(dispatch, fetchSetupsPending, fetchSetupsSuccess, fetchSetupsError, 'setups');
};

export const addSetup = setup => dispatch => {
  apiPOST(dispatch, addSetupPending, addSetupSuccess, addSetupError, 'setup', setup);
};

export const updateSetup = (id, object) => dispatch => {
  apiPUT(dispatch, updateSetupPending, updateSetupSuccess, updateSetupError, 'setup', id, object)
};

export const deleteSetup = id => dispatch => {
  apiDELETE(dispatch, deleteSetupPending, deleteSetupSuccess, deleteSetupError, 'setup', id)
};
