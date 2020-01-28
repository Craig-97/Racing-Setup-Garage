import {
  DELETE_TRACK_PENDING,
  DELETE_TRACK_SUCCESS,
  DELETE_TRACK_ERROR
} from "actions";

export const deleteTrackReducer = (state, action) => {
  switch (action.type) {
    case DELETE_TRACK_PENDING:
      return {
        ...state,
        CRUD: {
          type: "DELETE",
          pending: true
        }
      };
    case DELETE_TRACK_SUCCESS:
      return deleteTrackFromStore(state, action);
    case DELETE_TRACK_ERROR:
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

export const deleteTrackFromStore = (state, action) => {
  return {
    ...state,
    data: state.data.filter(track => track._id !== action.payload._id),
    CRUD: {
      type: null,
      pending: false,
      message: `${action.payload.name} Successfully Deleted`
    }
  };
};
