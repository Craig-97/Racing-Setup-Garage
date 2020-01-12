import {
    ADD_CAR_PENDING,
    ADD_CAR_SUCCESS,
    ADD_CAR_ERROR
  } from '../../actions/carActions';
  
  export const addCarReducer = (state, action) => {
    switch (action.type) {
      case ADD_CAR_PENDING:
        return {
          ...state,
          CRUD: {
            type: 'ADD',
            pending: true
          }
        };
      case ADD_CAR_SUCCESS:
      return {
          ...state,
          CRUD: {
            type: null,
            pending: false,
            message: `${action.payload.name} Successfully Added`
          }
      };
      case ADD_CAR_ERROR:
        return {
          ...state,
          CRUD: {
            type: 'ADD',
            pending: false,
            error: action.error
          }
        };
      default:
        return state;
    }
  }