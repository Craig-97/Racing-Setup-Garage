import { apiGET, apiPOST, apiPUT, apiDELETE } from './apiHelper';

import {
  fetchCarsPending,
  fetchCarsSuccess,
  fetchCarsError,
  addCarPending,
  addCarSuccess,
  addCarError,
  updateCarPending, 
  updateCarSuccess, 
  updateCarError,
  deleteCarPending,
  deleteCarSuccess,
  deleteCarError
} from '../actions';

export const fetchCars = () => dispatch => {
  apiGET(dispatch, fetchCarsPending, fetchCarsSuccess, fetchCarsError, 'cars');
};

export const addCar = car => dispatch => {
  apiPOST(dispatch, addCarPending, addCarSuccess, addCarError, 'car', car);
};

export const updateCar = (id, object) => dispatch => {
  apiPUT(dispatch, updateCarPending, updateCarSuccess, updateCarError, 'car', id, object)
};

export const deleteCar = id => dispatch => {
  apiDELETE(dispatch, deleteCarPending, deleteCarSuccess, deleteCarError, 'car', id)
};
