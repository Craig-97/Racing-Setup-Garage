import {
    ADD_SETUP_PENDING,
    ADD_SETUP_SUCCESS,
    ADD_SETUP_ERROR
  } from 'actions';
  
  export const addSetupReducer = (state, action) => {
    switch (action.type) {
      case ADD_SETUP_PENDING:
        return {
          ...state,
          CRUD: {
            type: 'ADD',
            pending: true
          }
        };
      case ADD_SETUP_SUCCESS:
      return {
          ...state,
          data: [...state.data, action.payload],
          CRUD: {
            type: null,
            pending: false,
            message: `${action.payload.name} Successfully Added`
          }
      };
      case ADD_SETUP_ERROR:
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