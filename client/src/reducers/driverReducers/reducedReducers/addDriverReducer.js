import {
    ADD_DRIVER_PENDING,
    ADD_DRIVER_SUCCESS,
    ADD_DRIVER_ERROR
  } from 'actions';
  
  export const addDriverReducer = (state, action) => {
    switch (action.type) {
      case ADD_DRIVER_PENDING:
        return {
          ...state,
          CRUD: {
            type: 'ADD',
            pending: true
          }
        };
      case ADD_DRIVER_SUCCESS:
      return {
          ...state,
          data: [...state.data, action.payload],
          CRUD: {
            type: null,
            pending: false,
            message: `${action.payload.name} Successfully Added`
          }
      };
      case ADD_DRIVER_ERROR:
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