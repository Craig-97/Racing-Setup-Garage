import {
  DELETE_SETUP_PENDING,
  DELETE_SETUP_SUCCESS,
  DELETE_SETUP_ERROR
} from "actions";

export const deleteSetupReducer = (state, action) => {
  switch (action.type) {
    case DELETE_SETUP_PENDING:
      return {
        ...state,
        CRUD: {
          type: "DELETE",
          pending: true
        }
      };
    case DELETE_SETUP_SUCCESS:
      return deleteSetupFromStore(state, action);
    case DELETE_SETUP_ERROR:
      return {
        ...state,
        CRUD: {
          type: "DELETE",
          pending: false,
          error: action.error
        }
      };
    default:
      return state;
  }
};

export const deleteSetupFromStore = (state, action) => {
  return {
    ...state,
    data: state.data.filter(setup => setup._id !== action.payload._id),
    CRUD: {
      type: null,
      pending: false,
      message: `${action.payload.name} Successfully Deleted`
    }
  };
};
