import {
  UPDATE_SETUP_PENDING,
  UPDATE_SETUP_SUCCESS,
  UPDATE_SETUP_ERROR
} from '../../actions';

export const updateSetupReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_SETUP_PENDING:
      return {
        ...state,
        CRUD: {
          type: 'UPDATE',
          pending: true
        }
      };
    case UPDATE_SETUP_SUCCESS:
      return {
        ...state,
        CRUD: {
          type: null,
          pending: false,
          message: `${action.payload.name} Successfully Updated`
        }
      };
    case UPDATE_SETUP_ERROR:
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

export const updateSetupToStore = (state, action) => {
  let updatedData = [...state.data];

  updatedData = updatedData.map(setup => {
    if (setup._id === action.payload._id) {
      return (setup = action.payload);
    } else {
      return setup;
    }
  });

  return {
    ...state,
    data: updatedData !== state.data ? updatedData : [...state.data]
  };
};
