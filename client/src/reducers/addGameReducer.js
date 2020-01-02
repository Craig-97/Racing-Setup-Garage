import {
    ADD_GAME_PENDING,
    ADD_GAME_SUCCESS,
    ADD_GAME_ERROR
  } from '../actions/gameActions';
  
  export default function(state, action) {
    switch (action.type) {
      case ADD_GAME_PENDING:
        return {
          ...state,
          CRUD: {
            type: 'ADD',
            pending: true
          }
        };
      case ADD_GAME_SUCCESS:
      return {
          ...state,
          CRUD: {
            type: null,
            pending: false,
            message: `${action.payload.name} Successfully Added`
          }
      };
      case ADD_GAME_ERROR:
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