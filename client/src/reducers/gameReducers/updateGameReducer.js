import {
  UPDATE_GAME_PENDING,
  UPDATE_GAME_SUCCESS,
  UPDATE_GAME_ERROR
} from '../../actions/gameActions';

export const updateGameReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_GAME_PENDING:
      return {
        ...state,
        CRUD: {
          type: 'UPDATE',
          pending: true
        }
      };
    case UPDATE_GAME_SUCCESS:
      return {
        ...state,
        CRUD: {
          type: null,
          pending: false,
          message: `${action.payload.name} Successfully Updated`
        }
      };
    case UPDATE_GAME_ERROR:
      return {
        ...state,
        CRUD: {
          type: 'UPDATE',
          pending: false,
          error: action.error
        }
      };
    default:
      return state;
  }
};

export const updateGameToStore = (state, action) => {
  let updatedData = [...state.data];

  updatedData = updatedData.map(game => {
    if (game._id === action.payload._id) {
      return (game = action.payload);
    } else {
      return game;
    }
  });

  return {
    ...state,
    data: updatedData !== state.data ? updatedData : [...state.data]
  };
};
