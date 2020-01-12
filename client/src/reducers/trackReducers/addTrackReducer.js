import {
    ADD_TRACK_PENDING,
    ADD_TRACK_SUCCESS,
    ADD_TRACK_ERROR
  } from '../../actions/trackActions';
  
  export const addTrackReducer = (state, action) => {
    switch (action.type) {
      case ADD_TRACK_PENDING:
        return {
          ...state,
          CRUD: {
            type: 'ADD',
            pending: true
          }
        };
      case ADD_TRACK_SUCCESS:
      return {
          ...state,
          CRUD: {
            type: null,
            pending: false,
            message: `${action.payload.name} Successfully Added`
          }
      };
      case ADD_TRACK_ERROR:
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