import {
  DELETE_GAME_PENDING,
  DELETE_GAME_SUCCESS,
  DELETE_GAME_ERROR
} from '../../actions';

export const deleteGameReducer = (state, action) => {
  switch (action.type) {
    case DELETE_GAME_PENDING:
      return {
        ...state,
        CRUD: {
          type: 'DELETE',
          pending: true
        }
      };
    case DELETE_GAME_SUCCESS:
      return {
        ...state,
        CRUD: {
          type: null,
          pending: false,
          message: `${action.payload.name} Successfully Deleted`
        }
      };
    case DELETE_GAME_ERROR:
      return {
        ...state,
        CRUD: {
          type: 'DELETE',
          pending: false,
          error: action.error
        }
      };
    default:
      return state;
  }
}

export const deleteGameFromStore = (state, action) => {
  return {
    ...state,
    data: state.data.filter(game => game._id !== action.payload._id)
  };
};
